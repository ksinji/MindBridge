import React, { useState, useEffect } from "react";
import axios from "axios";
import {LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ReferenceLine} from "recharts";
import { useNavigate } from "react-router-dom";
import * as S from "./style.jsx";

const calculateAverage = (data, key) => {
    const total = data.reduce((sum, item) => sum + item[key], 0);
    return total / data.length;
};

const missionDescriptions = [
    { name: "주간 걷기 미션", descriptions: ["주간 50,000보 걷기", "주간 10,000보 걷기", "주간 70,000보 걷기"] },
    { name: "랜덤 미션", descriptions: ["하루에 30분 이상 활동하기", "하루에 1시간 운동하기", "하루에 10,000보 걷기"] },
];

const exercises = [
    { intensity: "저강도 운동", description: "산책, 스트레칭, 자전거 타기 20분" },
    { intensity: "중강도 운동", description: "요가, 걷기 30분, 자전거 타기 40분" },
    { intensity: "고강도 운동", description: "달리기, 인터벌 트레이닝 30분" },
];

const WeeklyAnalysis = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [healthData, setHealthData] = useState([]);
    const [lastDate, setLastDate] = useState(new Date());
    const [weekRange, setWeekRange] = useState({ start: new Date(), end: new Date() });
    const [recommendedExercise, setRecommendedExercise] = useState(exercises[1]); // 중강도 운동 초기화

    const watchId = "1234567890123456"; // 고정된 watchId

    // 데이터 조회 함수
    const fetchHealthData = async (startDate, endDate) => {
        try {
            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);

            const response = await axios.get(`http://localhost:8080/api/health/${watchId}/${formattedStartDate}/${formattedEndDate}`);
            setHealthData(response.data);
            setLoading(false);
        } catch (err) {
            setError("데이터를 불러오는 데 실패했습니다.");
            setLoading(false);
        }
    };

    // 주 범위 계산 함수
    const getWeekRange = (date) => {
        const start = new Date(date);
        const dayOfWeek = start.getDay();
        const distanceToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1); // 월요일로부터의 거리
        start.setDate(start.getDate() - distanceToMonday); // 이번 주 월요일
        const end = new Date(start);
        end.setDate(start.getDate() + 6); // 일요일
        return { start, end };
    };

    // 날짜 형식 변환 함수
    const formatDate = (date) =>
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    // 이전 주 버튼
    const prevWeek = () => {
        const prevStartDate = new Date(weekRange.start);
        prevStartDate.setDate(weekRange.start.getDate() - 7);
        const { start, end } = getWeekRange(prevStartDate);
        setWeekRange({ start, end });

        updateExercise();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 다음 주 버튼
    const nextWeek = () => {
        const nextStartDate = new Date(weekRange.start);
        nextStartDate.setDate(weekRange.start.getDate() + 7);
        if (nextStartDate <= lastDate) { // 마지막 날짜 체크
            const { start, end } = getWeekRange(nextStartDate);
            setWeekRange({ start, end });
        }

        updateExercise();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 주 범위가 변경될 때 데이터 조회
    useEffect(() => {
        fetchHealthData(weekRange.start, weekRange.end);
    }, [weekRange]);

    // 추천 운동 및 미션 내용 변경 함수
    const updateExercise = () => {
        const exerciseIndex = Math.floor(Math.random() * 3); // 0, 1, 2 중 랜덤 선택
        setRecommendedExercise(exercises[exerciseIndex]);
    };

    // 랜덤 미션 설명 설정 함수
    const getRandomMissionDescription = (missionName) => {
        const mission = missionDescriptions.find(m => m.name === missionName);
        const randomIndex = Math.floor(Math.random() * mission.descriptions.length);
        return mission.descriptions[randomIndex];
    };

    // 데이터 변환 함수
    const transformData = (data) => {
        const heartRateData = [];
        const stepsData = [];
        const activityData = [];
        const illuminationData = [];

        data.forEach(item => {
            const day = new Date(item.date);
            const dayName = day.toLocaleDateString("ko-KR", { weekday: "short" }); // 요일 추출
            heartRateData.push({ day: dayName, bpm: item.maxHeartRate });
            stepsData.push({ day: dayName, steps: item.stepCount });
            activityData.push({ day: dayName, activeTime: item.activityDuration });
            illuminationData.push({ day: dayName, illumination: item.maxIllu });
        });

        return { heartRateData, stepsData, activityData, illuminationData };
    };

    const { heartRateData, stepsData, activityData, illuminationData } = transformData(healthData);

    const heartRateAvg = heartRateData.length > 0 ? calculateAverage(heartRateData, "bpm") : 0;
    const stepsAvg = stepsData.length > 0 ? calculateAverage(stepsData, "steps") : 0;
    const activityAvg = activityData.length > 0 ? calculateAverage(activityData, "activeTime") : 0;
    const illuminationAvg = illuminationData.length > 0 ? calculateAverage(illuminationData, "illumination") : 0;

    return (
        <S.Container>
            <S.Title>📊 주간 분석</S.Title>
            <S.Date>{formatDate(weekRange.start)} ~ {formatDate(weekRange.end)}</S.Date>

            {loading && <div>로딩 중...</div>}
            {error && <div>{error}</div>}

            <S.HorizontalContainer>
                <S.VerticalContainer>
                    <S.WeeklyBox>
                        <S.SubTitle>이번 주 미션</S.SubTitle>
                        {missionDescriptions.map((mission, index) => (
                            <S.MissionContainer key={index}>
                                <S.MissionDetails>
                                    <strong>{mission.name}</strong>
                                    <span>{getRandomMissionDescription(mission.name)}</span> {/* 랜덤 설명 */}
                                </S.MissionDetails>
                                <S.CompleteButton type={missionDescriptions.completed ? "달성" : "미달성"}>
                                    {missionDescriptions.completed ? "달성" : "미달성"}
                                </S.CompleteButton>
                            </S.MissionContainer>
                        ))}
                    </S.WeeklyBox>
                </S.VerticalContainer>

                <S.VerticalContainer>
                    <S.WeeklyBox>
                        <S.SubTitle>이번 주 추천 운동</S.SubTitle>
                        <S.RecommendedExercise>
                            <strong>{recommendedExercise.intensity}</strong>
                            <span>{recommendedExercise.description}</span>
                        </S.RecommendedExercise>
                    </S.WeeklyBox>
                </S.VerticalContainer>
            </S.HorizontalContainer>

            <S.GraphContainer>
                <S.ChartWrapper>
                    <S.ChartTitle>최고 심박수</S.ChartTitle>
                    {heartRateData.length > 0 ? (
                        <LineChart width={400} height={250} data={heartRateData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="bpm" stroke="#3B73E4" strokeWidth={2} />
                            <ReferenceLine y={heartRateAvg} stroke="maroon" />
                        </LineChart>
                    ) : (
                        <div>헬스 데이터가 없습니다.</div>
                    )}
                </S.ChartWrapper>

                <S.ChartWrapper>
                    <S.ChartTitle>걸음수</S.ChartTitle>
                    {stepsData.length > 0 ? (
                        <BarChart width={400} height={250} data={stepsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="steps" fill="#689BF3" />
                            <ReferenceLine y={stepsAvg} stroke="maroon"/>
                        </BarChart>
                    ) : (
                        <div>헬스 데이터가 없습니다.</div>
                    )}
                </S.ChartWrapper>
            </S.GraphContainer>

            <S.GraphContainer>
                <S.ChartWrapper>
                    <S.ChartTitle>활동 시간</S.ChartTitle>
                    {activityData.length > 0 ? (
                        <BarChart width={400} height={250} data={activityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="activeTime" fill="#4169E1" />
                            <ReferenceLine y={activityAvg} stroke="maroon"/>
                        </BarChart>
                    ) : (
                        <div>헬스 데이터가 없습니다.</div>
                    )}
                </S.ChartWrapper>

                <S.ChartWrapper>
                    <S.ChartTitle>조도</S.ChartTitle>
                    {illuminationData.length > 0 ? (
                        <LineChart width={400} height={250} data={illuminationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="illumination" stroke="#8884d8" strokeWidth={2} />
                            <ReferenceLine y={illuminationAvg} stroke="maroon"/>
                        </LineChart>
                    ) : (
                        <div>헬스 데이터가 없습니다.</div>
                    )}
                </S.ChartWrapper>
            </S.GraphContainer>

            <S.NavigationButtons>
                <S.NavigationButton onClick={prevWeek}>◀ 이전 주</S.NavigationButton>
                <S.NavigationButton onClick={nextWeek} disabled={new Date(weekRange.start).getDate() + 7 > lastDate.getDate()}>다음 주 ▶</S.NavigationButton>
            </S.NavigationButtons>

            <S.Button onClick={() => navigate(-1)}>돌아가기</S.Button>
        </S.Container>
    );
};

export default WeeklyAnalysis;
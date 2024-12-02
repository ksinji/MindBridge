import React, { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { useNavigate } from "react-router-dom";
import * as S from "./style.jsx";

const generateDummyData = () => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const heartRateData = [];
    const stepsData = [];
    const activityData = [];
    const illuminationData = [];

    for (let i = 0; i < 7; i++) {
        heartRateData.push({ day: days[i], bpm: 70 + Math.floor(Math.random() * 15) });
        stepsData.push({ day: days[i], steps: 3000 + Math.floor(Math.random() * 5000) });
        activityData.push({ day: days[i], activeTime: 30 + Math.floor(Math.random() * 60) });
        illuminationData.push({ day: days[i], illumination: 40 + Math.random() * 40 });
    }

    return { heartRateData, stepsData, activityData, illuminationData };
};

const WeeklyAnalysis = () => {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());

    const getWeekRange = (date) => {
        const start = new Date(date);
        start.setDate(start.getDate() - start.getDay() - 6);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return { start, end };
    };

    const { start: weekStart, end: weekEnd } = getWeekRange(currentDate);
    const today = new Date();
    const { heartRateData, stepsData, activityData, illuminationData } = generateDummyData();

    const formatDate = (date) =>
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const prevWeek = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    const nextWeek = () => {
        const nextStartDate = new Date(currentDate);
        nextStartDate.setDate(currentDate.getDate() + 7);
        if (nextStartDate <= today) {
            setCurrentDate(nextStartDate);
        }
    };

    const missions = [
        { name: "주간 걷기 미션", description: "주간 50,000보 걷기", points: 500, completed: false },
        { name: "랜덤 미션", description: "하루에 30분 이상 활동하기", points: 300, completed: true },
    ];

    const recommendedExercise = {
        name: "중강도 운동",
        description: "요가, 걷기 30분, 자전거 타기"
    };

    return (
        <S.Container>
            <S.Title>📊 주간 분석</S.Title>
            <S.Date>{formatDate(weekStart)} ~ {formatDate(weekEnd)}</S.Date>

            <S.HorizontalContainer>
                <S.VerticalContainer>
                    <S.WeeklyBox>
                    <S.SubTitle>이번 주 미션</S.SubTitle>
                    {missions.map((mission, index) => (
                        <S.MissionContainer key={index}>
                            <S.MissionDetails>
                                <strong>{mission.name}</strong>
                                <span>{mission.description}</span>
                            </S.MissionDetails>
                            <S.CompleteButton type={mission.completed ? "달성" : "미달성"}>
                                {mission.completed ? "달성" : "미달성"}
                            </S.CompleteButton>
                        </S.MissionContainer>
                    ))}</S.WeeklyBox>
                </S.VerticalContainer>

                <S.VerticalContainer>
                    <S.WeeklyBox>
                        <S.SubTitle>이번 주 추천 운동</S.SubTitle>
                        <S.RecommendedExercise>
                            <strong>{recommendedExercise.name}</strong>
                            <span>{recommendedExercise.description}</span>
                        </S.RecommendedExercise>
                    </S.WeeklyBox>
                </S.VerticalContainer>
            </S.HorizontalContainer>

            <S.GraphContainer>
                <S.ChartWrapper>
                    <S.ChartTitle>최고 심박수</S.ChartTitle>
                    <LineChart width={400} height={250} data={heartRateData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="bpm" stroke="#3B73E4" strokeWidth={2} />
                    </LineChart>
                </S.ChartWrapper>

                <S.ChartWrapper>
                    <S.ChartTitle>걸음수</S.ChartTitle>
                    <BarChart width={400} height={250} data={stepsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="steps" fill="#689BF3" />
                    </BarChart>
                </S.ChartWrapper>
            </S.GraphContainer>

            <S.GraphContainer>
                <S.ChartWrapper>
                    <S.ChartTitle>활동 시간</S.ChartTitle>
                    <BarChart width={400} height={250} data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="activeTime" fill="#4169E1" />
                    </BarChart>
                </S.ChartWrapper>

                <S.ChartWrapper>
                    <S.ChartTitle>조도</S.ChartTitle>
                    <LineChart width={400} height={250} data={illuminationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="illumination" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </S.ChartWrapper>
            </S.GraphContainer>

            <S.NavigationButtons>
                <S.NavigationButton onClick={prevWeek}>◀ 이전 주</S.NavigationButton>
                <S.NavigationButton onClick={nextWeek} disabled={weekEnd >= today}>다음 주 ▶</S.NavigationButton>
            </S.NavigationButtons>

            <S.Button onClick={() => navigate(-1)}>돌아가기</S.Button>
        </S.Container>
    );
};

export default WeeklyAnalysis;

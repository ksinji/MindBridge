import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

// 데이터
const heartRateData = [
    { day: "월", bpm: 75 },
    { day: "화", bpm: 80 },
    { day: "수", bpm: 78 },
    { day: "목", bpm: 82 },
    { day: "금", bpm: 76 },
    { day: "토", bpm: 85 },
    { day: "일", bpm: 77 },
];

const stepsData = [
    { day: "월", steps: 10000 },
    { day: "화", steps: 12000 },
    { day: "수", steps: 9000 },
    { day: "목", steps: 11000 },
    { day: "금", steps: 9500 },
    { day: "토", steps: 15000 },
    { day: "일", steps: 13000 },
];

const WeeklyAnalysis = () => {
    const navigate = useNavigate(); // React Router의 useNavigate 훅 사용

    return (
        <div>
            <h1>📊 주간 분석</h1>

            <div>
                <h2>주간 심박수</h2>
                <LineChart width={600} height={300} data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="bpm" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </div>

            <div>
                <h2>주간 걸음수</h2>
                <BarChart width={600} height={300} data={stepsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="steps" fill="#82ca9d" />
                </BarChart>
            </div>

            {/* 돌아가기 버튼 추가 */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => navigate(-1)} // 이전 페이지로 이동
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "white",
                        backgroundColor: "#007bff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    돌아가기
                </button>
            </div>
        </div>
    );
};

export default WeeklyAnalysis;

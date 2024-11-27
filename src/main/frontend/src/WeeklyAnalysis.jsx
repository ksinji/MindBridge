import React from "react";
import * as S from "./style";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
    const averageBPM = (
        heartRateData.reduce((sum, data) => sum + data.bpm, 0) / heartRateData.length
    ).toFixed(1);

    const totalSteps = stepsData.reduce((sum, data) => sum + data.steps, 0);
    const averageSteps = (totalSteps / stepsData.length).toFixed(0);

    return (
        <S.Container>
            <S.Title>주간 분석</S.Title>

            <S.Section>
                <h2>심박수</h2>
                <LineChart width={600} height={300} data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="bpm" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
                <S.Message>평균 심박수: {averageBPM} bpm</S.Message>
            </S.Section>

            <S.Section>
                <h2>걸음수</h2>
                <BarChart width={600} height={300} data={stepsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="steps" fill="#82ca9d" />
                </BarChart>
                <S.Message>평균 걸음수: {averageSteps} 걸음</S.Message>
                <S.Message>누적 걸음수: {totalSteps} 걸음</S.Message>
            </S.Section>
        </S.Container>
    );
};

export default WeeklyAnalysis;

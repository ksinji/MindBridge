import React from "react";
import * as S from "./style";

const pointsData = [
    { date: "2024.11.12", description: "피부과 1회 이용권 구매", points: -70000 },
    { date: "2024.11.10", description: "주간 걸음수 목표 달성", points: 20000 },
    { date: "2024.11.07", description: "모임 참석 보너스", points: 5000 },
    { date: "2024.11.05", description: "상점에서 상품권 구매", points: -30000 },
    { date: "2024.11.03", description: "하루 4만 걸음 달성", points: 100 },
];

const PointsHistory = () => {
    const totalPoints = pointsData.reduce((sum, item) => sum + item.points, 0);

    return (
        <S.Container>
            <S.Title>포인트 내역</S.Title>
            <S.List>
                {pointsData.map((item, index) => (
                    <S.ListItem key={index} isPositive={item.points > 0}>
                        <S.Date>{item.date}</S.Date>
                        <S.Description>{item.description}</S.Description>
                        <S.Points isPositive={item.points > 0}>
                            {item.points > 0 ? `+${item.points}pt` : `${item.points}pt`}
                        </S.Points>
                    </S.ListItem>
                ))}
            </S.List>
            <S.Message>현재 보유 포인트: {totalPoints}pt</S.Message>
        </S.Container>
    );
};

export default PointsHistory;

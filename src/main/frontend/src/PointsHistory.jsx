import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const PointsHistory = () => {
    const navigate = useNavigate(); // navigate 설정
    const totalPoints = 11000; // 현재 보유 포인트
    const pointsData = [
        { date: "24.10.22", description: "헬스장 pt 구매", points: -1000 },
        { date: "24.10.21", description: "4만 걸음 달성", points: +200 },
        { date: "24.10.20", description: "주간 걸음수 목표 달성", points: +500 },
        { date: "24.10.19", description: "피부과 이용권 구매", points: -7000 },
    ];

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
            <h1>💳 포인트 내역</h1>
            <hr />
            <p>현재 포인트: {totalPoints}pt</p>
            <hr />
            {pointsData.map((item, index) => (
                <p key={index}>
                    {item.date} : {item.description} {item.points > 0 ? `+${item.points}pt` : `${item.points}pt`}
                </p>
            ))}
            <hr />
            <button
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                style={{
                    marginTop: "20px",
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
    );
};

export default PointsHistory;

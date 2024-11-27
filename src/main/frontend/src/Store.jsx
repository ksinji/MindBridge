import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const Store = () => {
    const [userPoints, setUserPoints] = useState(1000); // 현재 보유 포인트
    const navigate = useNavigate(); // navigate 설정

    const storeItems = [
        { id: 1, name: "헬스장 pt", price: 2000 },
        { id: 2, name: "올리브영 상품권", price: 1000 },
        { id: 3, name: "커피 쿠폰", price: 500 },
        { id: 4, name: "무료 PT 이용권", price: 3000 },
    ];

    const handlePurchase = (item) => {
        if (userPoints >= item.price) {
            setUserPoints(userPoints - item.price); // 포인트 차감
            alert(`${item.name}을(를) 구매했습니다!`);
        } else {
            alert("포인트가 부족합니다."); // 포인트 부족 알림
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
            <h1>🛒 스토어</h1>
            <hr />
            <p>현재 포인트: {userPoints}pt</p>
            <hr />
            {storeItems.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                    <span>
                        {item.name} : {item.price}pt
                    </span>
                    <button
                        onClick={() => handlePurchase(item)}
                        style={{
                            marginLeft: "10px",
                            padding: "5px 10px",
                            backgroundColor: userPoints >= item.price ? "#28a745" : "#ccc",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: userPoints >= item.price ? "pointer" : "not-allowed",
                        }}
                        disabled={userPoints < item.price} // 포인트 부족 시 버튼 비활성화
                    >
                        구매
                    </button>
                </div>
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

export default Store;

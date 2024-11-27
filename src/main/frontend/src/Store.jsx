import React, { useState } from "react";
import * as S from "./style";

const storeItems = [
    { id: 1, name: "피부과 1회 이용권", price: 70000, description: "피부를 더 아름답게!" },
    { id: 2, name: "무료 PT 1회 이용권", price: 50000, description: "운동의 즐거움을 느껴보세요." },
    { id: 3, name: "정신과 상담 1회 이용권", price: 70000, description: "마음을 치유하세요." },
    { id: 4, name: "상품권 (10,000pt)", price: 10000, description: "현금처럼 사용 가능한 상품권." },
    { id: 5, name: "상품권 (20,000pt)", price: 20000, description: "더 높은 가치를 얻으세요!" },
];

const Store = () => {
    const [userPoints, setUserPoints] = useState(65000); // 현재 보유 포인트 (기본값)

    const handlePurchase = (item) => {
        if (userPoints >= item.price) {
            setUserPoints(userPoints - item.price); // 포인트 차감
            alert(`${item.name}을(를) 구매했습니다!`);
        } else {
            alert("포인트가 부족합니다.");
        }
    };

    return (
        <S.Container>
            <S.Title>스토어</S.Title>
            <S.Message>현재 보유 포인트: {userPoints}pt</S.Message>
            <S.ItemList>
                {storeItems.map((item) => (
                    <S.ItemCard key={item.id}>
                        <S.ItemName>{item.name}</S.ItemName>
                        <S.ItemDescription>{item.description}</S.ItemDescription>
                        <S.ItemPrice>가격: {item.price}pt</S.ItemPrice>
                        <S.PurchaseButton
                            onClick={() => handlePurchase(item)}
                            disabled={userPoints < item.price}
                        >
                            {userPoints >= item.price ? "구매" : "잔액 부족"}
                        </S.PurchaseButton>
                    </S.ItemCard>
                ))}
            </S.ItemList>
        </S.Container>
    );
};

export default Store;

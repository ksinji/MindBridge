import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import axios from "axios"; // Axios 임포트
import * as S from "./style.jsx"; // 스타일 파일 임포트

const Store = () => {
    const [userPoints, setUserPoints] = useState(0); // 현재 보유 포인트
    const [storeItems, setStoreItems] = useState([]); // 상품 목록
    const navigate = useNavigate(); // navigate 설정
    const userId = 1; // 사용자 ID, 실제 값으로 대체 가능

    useEffect(() => {
        // 상품 목록 및 사용자 포인트 조회
        const fetchStoreData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/store?userId=${userId}`);
                setStoreItems(response.data.products || []); // 상품 목록 저장
                setUserPoints(response.data.userPoint || 0); // 사용자 포인트 저장
            } catch (error) {
                console.error("스토어 데이터를 가져오는 데 실패했습니다:", error);
                setStoreItems([]);
                setUserPoints(0);
            }
        };

        fetchStoreData();
    }, [userId]);

    const handlePurchase = async (item) => {
        try {
            // 사용자 ID와 아이템 ID를 올바르게 전달
            const response = await axios.post(`http://localhost:8080/api/store/purchase?userId=${userId}&itemId=${item.id}`);
            alert(`${item.name}을(를) 구매했습니다!`);
            setUserPoints((prevPoints) => prevPoints - item.price); // 포인트 차감
        } catch (error) {
            // 서버에서 반환한 오류 메시지 확인
            const errorMessage = error.response?.data?.message || "알 수 없는 오류";
            alert("구매에 실패했습니다: " + errorMessage);
        }
    };


    return (
        <S.Container>
            <S.Title>🛒 스토어</S.Title>
            <S.Message>현재 포인트: {userPoints}pt</S.Message>
            <S.HorizontalLine />
            {storeItems.length > 0 ? (
                storeItems.map((item, index) => (
                    <S.ItemContainer key={index}>
                        <S.ItemName>{item.name}</S.ItemName>
                        <S.ItemPrice>{item.price}pt</S.ItemPrice>
                        <S.PurchaseButton
                            onClick={() => handlePurchase(item)}
                            disabled={userPoints < item.price} // 포인트 부족 시 버튼 비활성화
                        >
                            구매
                        </S.PurchaseButton>
                    </S.ItemContainer>
                ))
            ) : (
                <S.Message>상품이 없습니다.</S.Message> // 상품이 없을 경우 표시
            )}
            <S.HorizontalLine />
            <S.Button onClick={() => navigate(-1)}>돌아가기</S.Button>
        </S.Container>
    );
};

export default Store;
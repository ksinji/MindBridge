import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style.jsx";

const PointsHistory = () => {
    const navigate = useNavigate();
    const [currentPoints, setCurrentPoints] = useState(0);
    const [pointsData, setPointsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = 1; // 사용자 ID, 실제 값으로 대체 가능

    useEffect(() => {
        const fetchPointsData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/point?userId=${userId}`);
                setPointsData(response.data.pointHistories || []);
                setCurrentPoints(response.data.currentPoints || 0);
            } catch (error) {
                console.error("포인트 내역을 가져오는 데 실패했습니다:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPointsData();
    }, [userId]);

    if (loading) {
        return <S.Message>로딩 중...</S.Message>;
    }

    return (
        <S.Container>
            <S.Title>💳 포인트 내역</S.Title>
            <S.Message>현재 포인트: {currentPoints}pt</S.Message>
            <S.HorizontalLine />
            <S.PointsList>
                {pointsData.length > 0 ? (
                    pointsData.map((item, index) => {
                        const isPurchase = item.transactionType === "purchase";
                        const pointDisplay = isPurchase ? -item.points : item.points;

                        return (
                            <S.PointItem key={index}>
                                <S.TransactionType type={item.transactionType}>
                                    {isPurchase ? "구매" : "적립"}
                                </S.TransactionType>
                                <S.TransactionDate>
                                    {new Date(item.createdAt).toLocaleDateString()} {/* createdAt 사용 */}
                                </S.TransactionDate>
                                <S.PointDescription>
                                    {item.transactionDescription}
                                </S.PointDescription>
                                <S.PointValue type={item.transactionType}>
                                    {pointDisplay > 0 ? `+${pointDisplay}pt` : `${pointDisplay}pt`}
                                </S.PointValue>
                            </S.PointItem>
                        );
                    })
                ) : (
                    <S.Message>포인트 내역이 없습니다.</S.Message>
                )}
            </S.PointsList>
            <S.HorizontalLine />
            <S.Button onClick={() => navigate(-1)}>돌아가기</S.Button>
        </S.Container>
    );
};

export default PointsHistory;

// Sample.jsx
import React from "react";

// React Router의 useNavigate 추가 (수정된 부분)
import { useNavigate } from "react-router-dom";

import * as S from "./style";

function Sample() {
    // useNavigate 훅 사용 (수정된 부분)
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Title>MindBridge</S.Title>
            <S.ButtonContainer>
                {/* 각 버튼 클릭 시 페이지 전환 (수정된 부분) */}
                <S.Button onClick={() => navigate("/weekly-analysis")}>
                    📊 주간 분석    
                </S.Button>
                <S.Button onClick={() => navigate("/points-history")}>
                    💳 포인트 내역
                </S.Button>
                <S.Button onClick={() => navigate("/store")}>
                    🛒 스토어
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
}

export default Sample;

import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

function Sample() {
    const [message, setMessage] = useState("");

    // 버튼 클릭 핸들러
    const handleButtonClick = async (action) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/${action}`);
            setMessage(response.data); // 백엔드에서 반환된 메시지를 상태로 저장
        } catch (error) {
            console.error("Error:", error);
            setMessage("오류 발생");
        }
    };

    return (
        <S.Container>
            <S.Title>Sample Page</S.Title>
            <S.ButtonContainer>
                <S.Button onClick={() => handleButtonClick("action1")}>
                    Button 1
                </S.Button>
                <S.Button onClick={() => handleButtonClick("action2")}>
                    Button 2
                </S.Button>
                <S.Button onClick={() => handleButtonClick("action3")}>
                    Button 3
                </S.Button>
            </S.ButtonContainer>
            <S.Message>{message}</S.Message>
        </S.Container>
    );
}

export default Sample;
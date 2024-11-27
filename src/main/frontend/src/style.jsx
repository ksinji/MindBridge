import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 추가: 수직 정렬 */
  min-height: 100vh; /* 수정: 화면 전체 높이 */
  width: 100%; /* 수정: 부모 컨테이너의 전체 너비 */
  background-color: #f0f8ff;
  padding: 20px; /* 추가: 컨테이너 여백 */
  box-sizing: border-box; /* 추가: 패딩 포함 크기 계산 */
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* 수정: 컨테이너 간 여백 */
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #448844;
  }
`;

export const Message = styled.p`
  margin-top: 20px;
  padding: 10px;
  color: #447744;
  font-size: 24px;
  text-align: center; /* 추가: 텍스트 중앙 정렬 */
`;

// style.jsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  padding: 40px 200px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const Date = styled.div`
  color: #777;
  font-size: 24px;
  margin-bottom: 40px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;


export const Message = styled.p`
  margin-top: 20px;
  padding: 10px;
  color: #888888;
  font-size: 24px;
  text-align: center;
`;

export const PointsList = styled.div`
  padding: 20px;
  width: 90%;
`;

export const PointItem = styled.p`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;

export const TransactionDate = styled.span`
  color: #555;
  margin-left: 50px;
`;

export const PointDescription = styled.span`
  flex: 1; 
  padding: 0 60px;
  color: black;
  font-size: 20px;
`;

export const TransactionType = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  color: white;
  margin-right: 10px;
  background-color: ${props => (props.type === "purchase" ? "#ff6b6b" : "#4db8ff")};
`;

export const PointValue = styled.span`
  color: ${props => (props.type === "purchase" ? "#ff6b6b" : "#4db8ff")};
  font-weight: bold;
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666666;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
  margin: 20px 0; 
`;

export const ItemContainer = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양 끝으로 정렬 */
  width: 90%; /* 전체 너비 사용 */
`;

export const ItemName = styled.span`
  margin-right: 30px; /* 이름과 가격 간격 조정 */
  font-size: 20px;
  flex: 1; /* 남은 공간을 차지하도록 설정 */
`;

export const ItemPrice = styled.span`
  color: #4169E1; /* 가격 색상 설정 */
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px; /* 가격과 버튼 간격 조정 */
`;

export const PurchaseButton = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.disabled ? "#ccc" : "#4169E1")};
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  
  &:hover {
    background-color: ${props => (props.disabled ? "#ccc" : "#546491")};
  }
`;

export const HorizontalContainer = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const MissionContainer = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: vertical;
    align-items: center;
    justify-content: space-between;
`;

export const MissionDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const CompleteButton = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  color: white;
  margin: 5px 10px;
  background-color: ${props => (props.type === "달성" ? "#689BF3" : "#999")};
`;


export const RecommendedExercise = styled.div`
  margin: 20px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column; // 세로 정렬
  margin-top: 10px; // 필요시 여백 추가
`;

export const GraphContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 60px;
`;

export const NavigationButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavigationButton = styled.div`
  background-color: #888;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  padding: 5px 0px 20px 0px;
  font-weight: bold;
  text-align: center;
`;

export const ChartWrapper = styled.div`
  width: 48%;
`;

export const ChartTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const WeeklyBox = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px; 
  width: 100%; 
  height: 180px;
  align-items: center;
`;

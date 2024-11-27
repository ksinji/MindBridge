// style.jsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  padding: 40px 400px;
  box-sizing: border-box;
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
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  line-height: 1.5; 
  width: 90%;
`;

export const ItemName = styled.span`
  margin-right: 30px;
  font-size: 20px;
  flex: 1; 
`;

export const ItemPrice = styled.span`
  color: #4169E1; 
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
`;

export const PurchaseButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: ${props => (props.disabled ? "#888" : "#4169E1")};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    
    &:hover {
        background-color: ${props => (props.disabled ? "#ccc" : "#475a91")};
    }
`;
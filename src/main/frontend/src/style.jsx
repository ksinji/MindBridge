import React from 'react'
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vw;
  width: 100vw;
  background-color: #f0f8ff;
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
  height: 100px;
`

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
`;
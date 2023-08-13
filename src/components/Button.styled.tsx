import styled, {css} from "styled-components";
import React from "react";


type ButtonPropsType = {
    fontSize?: string,
    color?: string,
    borderColor?: string,
    fontColor?: string,
    btnType?: "primary" | "secondary"
}

export const Button = styled.button<ButtonPropsType> `
  border-radius: 5px;
  background-color: ${props => props.color || "#4E71FE"};
  width: 86px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  color: ${props => props.fontColor};
  font-weight: 700;
  border-color: ${props => props.borderColor};

  &:hover {
    background-color: #DA70D6;
    color: snow;
  }
  

`;



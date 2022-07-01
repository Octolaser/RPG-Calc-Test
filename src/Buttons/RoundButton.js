import React from "react";
import styled from "styled-components";

const RoundButton = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #662d91;
  border: 2px solid #3e1b6b;
  font-size: 12px;
  color: #fff;

  :hover {
    background-color: #3e1b6b;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return <RoundButton onClick={props.onClick} />;
};

export default Button;

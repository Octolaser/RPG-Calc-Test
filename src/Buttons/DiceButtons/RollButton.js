import React from "react";
import styled from "styled-components";
import D20 from "../../Images/Dice/D20Icon";
import D12 from "../../Images/Dice/D12Icon";
import D8 from "../../Images/Dice/D8Icon";
import D6 from "../../Images/Dice/D6Icon";
import D4 from "../../Images/Dice/D4Icon";

const RollButton = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  background-color: #662d91;
  border: 3px solid #3e1b6b;
  margin: 0 auto;
  user-select: none;

  :hover {
    background-color: #3e1b6b;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const Label = styled.p`
  color: #fff;
  font-size: 13px;
  position: relative;
  top: -69%;

  @media (max-width: 600px) {
    top: -75%;
    font-size: 11px;
  }
`;

const StyledD20 = styled(D20)`
  margin-top: 9px;
  width: 55px;

  @media (max-width: 600px) {
    margin-top: 7px;
    width: 40px;
  }
`;

const StyledD12 = styled(D12)`
  margin-top: 9px;
  width: 58px;
  padding-bottom: 2px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 9px;
    width: 41px;
  }
`;

const StyledD8 = styled(D8)`
  margin-top: 11px;
  width: 52px;
  padding-bottom: 2px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 9px;
    width: 38px;
  }
`;

const StyledD6 = styled(D6)`
  margin-top: 18px;
  width: 45px;
  padding-bottom: 9px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 13px;
    width: 36px;
    padding-bottom: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const StyledD4 = styled(D4)`
  margin-top: 11px;
  width: 48px;

  @media (max-width: 600px) {
    margin-top: 7px;
    width: 40px;
  }
`;

const ButtonShell = ({ dice, onClick }) => {
  if (dice === 20) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD20 button={"yes"} />
          <Label>20</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 12) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD12 button={"yes"} />
          <Label>12</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 8) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD8 button={"yes"} />
          <Label>8</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 6) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD6 button={"yes"} />
          <Label>6</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 4) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD4 button={"yes"} />
          <Label>4</Label>
        </RollButton>
      </React.Fragment>
    );
  } else {
    console.log("Roll Button Generator Error");
  }
};

export default ButtonShell;

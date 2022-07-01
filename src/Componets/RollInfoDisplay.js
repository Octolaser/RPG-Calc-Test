import React from "react";
import styled from "styled-components";
import DiceRollResults from "../Logic/DiceRollResults";
import D4Icon from "../Images/Dice/D4Icon";
import D6Icon from "../Images/Dice/D6Icon";
import D8Icon from "../Images/Dice/D8Icon";
import D12Icon from "../Images/Dice/D12Icon";
import D20Icon from "../Images/Dice/D20Icon";

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 35px;
  background-color: #fff;
  border: 3px solid #662d91;

  @media (max-width: 600px) {
    width: 85%;
    margin-right: 10px;
    float: right;
    margin-top: 05px;
  }
`;

const CountContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 80%;
    flex-flow: wrap;
  }
`;

const DiceDisplay = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const StyledD4 = styled(D4Icon)`
  width: 50px;
`;

const StyledD6 = styled(D6Icon)`
  width: 50px;
`;

const StyledD8 = styled(D8Icon)`
  width: 50px;
`;

const StyledD12 = styled(D12Icon)`
  width: 50px;
`;

const StyledD20 = styled(D20Icon)`
  width: 50px;
`;

const Count = styled.p`
  margin-left: 10px;
`;

const RollInfoDisplay = (props) => {
  return (
    <Container>
      <p>Number of Rolls</p>
      <CountContainer>
        <DiceDisplay>
          <StyledD4 active={"yes"} />
          <Count>x {DiceRollResults.D4.length} </Count>
        </DiceDisplay>
        <DiceDisplay>
          <StyledD6 active={"yes"} />
          <Count>x {DiceRollResults.D6.length} </Count>
        </DiceDisplay>
        <DiceDisplay>
          <StyledD8 active={"yes"} />
          <Count>x {DiceRollResults.D8.length} </Count>
        </DiceDisplay>
        <DiceDisplay>
          <StyledD12 active={"yes"} />
          <Count>x {DiceRollResults.D12.length} </Count>
        </DiceDisplay>
        <DiceDisplay>
          <StyledD20 />
          <Count>x {DiceRollResults.D20.length} </Count>
        </DiceDisplay>
      </CountContainer>
    </Container>
  );
};

//<RoundButton onClick={props.onClick}>Clear</RoundButton>

export default RollInfoDisplay;

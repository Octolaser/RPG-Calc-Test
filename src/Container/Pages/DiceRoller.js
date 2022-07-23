import React, { useState } from "react";
import styled from "styled-components";
import LargeDiceDisplay from "../../Componets/DiceDisplay";
import RollButton from "../../Buttons/DiceButtons/RollButtons";
import RollInfoDisplay from "../../Componets/RollInfoDisplay";
import diceRollResults from "../../Logic/diceRollResults";
import lastrolled from "../../Logic/lastRolled";

const Container = styled.div`
  overflow-y: scroll;
`;

const RollDisplayContainer = styled.div`
  height: 280px;

  @media (max-width: 600px) {
    margin-top: -25px;
  }
`;

const DiceNumberContainer = styled.div`
  width: 50px;
  position: relative;
  top: -60%;
  left: calc(50% - 25px);
  text-align: center;
`;

const DiceNumber = styled.p`
  font-family: "Dosis";
  font-size: 2.8em;
  text-align: center;
  z-index: 1;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
`;

const DiceRollButtonContainer = styled.div`
  min-height: 85px;
  width: 50%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;

  @media (max-width: 1100px) {
    width: 65%;
  }

  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 85%;
  }
`;

const CenterAlingDiv = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: -25px;
  }
`;

const DiceRoller = () => {
  const [rolled, setRolled] = useState("R");
  const [type, setType] = useState(20);
  const [rollCount, setRollCount] = useState(0);

  const rollDice = (dice, diceID) => {
    const roll = Math.floor(Math.random() * dice) + 1;
    setRolled(roll);
    setType(dice);
    setRollCount(rollCount + 1);
    diceRollResults[diceID].push(roll);
    lastrolled[0] = diceID;
  };

  const clearRolls = () => {
    diceRollResults.D4 = [];
    diceRollResults.D6 = [];
    diceRollResults.D8 = [];
    diceRollResults.D10 = [];
    diceRollResults.D12 = [];
    diceRollResults.D20 = [];
    setRolled("R");
    lastrolled[0] = "D20";
    setRollCount(0);
    setType(20);
  };

  return (
    <Container>
      <RollDisplayContainer>
        <LargeDiceDisplay
          key={rollCount}
          dice={type}
          rolled={rolled}
          onClick={() => rollDice(type, `D${type}`)}
        />
        <DiceNumberContainer>
          <DiceNumber onClick={() => rollDice(type)}>{rolled}</DiceNumber>
        </DiceNumberContainer>
      </RollDisplayContainer>
      <CenterAlingDiv>
        <DiceRollButtonContainer>
          <RollButton dice={4} onClick={() => rollDice(4, "D4")} />
          <RollButton dice={6} onClick={() => rollDice(6, "D6")} />
          <RollButton dice={8} onClick={() => rollDice(8, "D8")} />
          <RollButton dice={10} onClick={() => rollDice(10, "D10")} />
          <RollButton dice={12} onClick={() => rollDice(12, "D12")} />
          <RollButton dice={20} onClick={() => rollDice(20, "D20")} />
          <RollButton dice={"clear"} onClick={() => clearRolls()} />
        </DiceRollButtonContainer>
      </CenterAlingDiv>
      <RollInfoDisplay />
    </Container>
  );
};

export default DiceRoller;

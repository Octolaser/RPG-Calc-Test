import React from "react";
import styled from "styled-components";
import LargeDiceDisplay from "../../Componets/DiceDisplay";
import RollButton from "../../Buttons/DiceButtons/RollButton";
import RollInfoDisplay from "../../Componets/RollInfoDisplay";
import DiceRollResults from "../../Logic/DiceRollResults";

const RollDisplayContainer = styled.div`
  height: 280px;
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
  height: 85px;
  width: 40%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 96%;
  }
`;

const CenterAlingDiv = styled.div`
  width: 100%;
  text-align: center;
`;

class DiceRoller extends React.Component {
  state = { rolled: "R", type: 20, results: DiceRollResults };

  rollDice = (dice, diceID) => {
    const roll = Math.floor(Math.random() * dice) + 1;
    this.setState({ rolled: roll });
    this.setState({ type: dice });
    this.state.results[diceID].push(roll);
  };

  clearRolls = () => {
    this.setState({
      results: {
        D4: [],
        D6: [],
        D8: [],
        D12: [],
        D20: [],
      },
    });
    console.log(this.state.results);
  };

  render() {
    return (
      <div>
        <RollDisplayContainer>
          <LargeDiceDisplay
            dice={this.state.type}
            rolled={this.state.rolled}
            onClick={() =>
              this.rollDice(this.state.type, `D${this.state.type}`)
            }
          />
          <DiceNumberContainer>
            <DiceNumber onClick={() => this.rollDice(this.state.type)}>
              {this.state.rolled}
            </DiceNumber>
          </DiceNumberContainer>
        </RollDisplayContainer>
        <CenterAlingDiv>
          <DiceRollButtonContainer>
            <RollButton dice={4} onClick={() => this.rollDice(4, "D4")} />
            <RollButton dice={6} onClick={() => this.rollDice(6, "D6")} />
            <RollButton dice={8} onClick={() => this.rollDice(8, "D8")} />
            <RollButton dice={12} onClick={() => this.rollDice(12, "D12")} />
            <RollButton dice={20} onClick={() => this.rollDice(20, "D20")} />
          </DiceRollButtonContainer>
        </CenterAlingDiv>
        <RollInfoDisplay onClick={() => this.clearRolls()} />
      </div>
    );
  }
}

export default DiceRoller;

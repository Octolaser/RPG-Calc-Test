import React from "react";
import styled from "styled-components";
import Header from "./header";
import PlayArea from "./MainPlayArea";
import Footer from "./footer";
import RollButton from "../Buttons/RollMenuItem";
import HistoryButton from "../Buttons/HistoryMenuItem";
import CharacterButton from "../Buttons/CharacterMenuItem";

const PlayContainer = styled.div`
  text-align: center;
`;

class MainContainer extends React.Component {
  render() {
    return (
      <PlayContainer>
        <Header />
        <PlayArea />
        <Footer />
        <RollButton active={true} />
        <HistoryButton />
        <CharacterButton />
      </PlayContainer>
    );
  }
}
export default MainContainer;

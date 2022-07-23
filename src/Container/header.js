import React, { useState } from "react";
import Logo from "../Images/Logo";
import ElfProfile from "../Images/ProfileImages/ElfProfile";
import styled from "styled-components";

const Background = styled.div`
  background-color: #252525;
  width: 99vw;
  display: flex;
  text-align: center;
  position: sticky;
  top: 8px;
  z-index: 3;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const Welcome = styled.h1`
  color: #fff;
  font-size: 1.8rem;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const WelcomeMobile = styled.h1`
  display: none;

  @media (max-width: 600px) {
    display: inline;
    color: #fff;
    font-size: 1.3rem;
    margin-right: 5vw;
  }
`;

const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #6b5386;
  align-self: center;
  margin-right: 3vw;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [characterName] = useState("Adventurer");
  return (
    <Background>
      <Logo />
      <CenterContainer>
        <Welcome>Welcome {characterName}</Welcome>
        <WelcomeMobile>{characterName}</WelcomeMobile>
      </CenterContainer>
      <AvatarContainer>
        <ElfProfile height="95%" style={{ marginTop: "5px" }} />
      </AvatarContainer>
    </Background>
  );
};
export default Header;

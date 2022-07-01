import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 99vw;
  min-height: 50px;
  margin-top: -5px;
  background-color: #252525;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Text = styled.p`
  color: #9f7bc9;
  text-align: center;
  padding-top: 15px;

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding-top: 20px;
  }
`;

const Link = styled.a`
  color: #9f7bc9;
  text-decoration: none;
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Text>
          RPG Calculator is an independent project. Copyright 2022&#160;{" "}
          <Link href="www.deloscreative.com" rel="noreferrer">
            John Jurmu
          </Link>
        </Text>
      </Container>
    );
  }
}

export default Footer;

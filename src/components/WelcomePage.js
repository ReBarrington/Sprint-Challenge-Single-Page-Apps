import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledButton = styled.button `
  font-size: 150%;
  margin-left: 10%;
  margin-top: 10%;
  background-color: #ABD2EB;
  padding: 1%;
  `


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Header
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to={`characters`}>
          <StyledButton>See Characters</StyledButton>
        </Link>
      </header>
    </section>
  );
}

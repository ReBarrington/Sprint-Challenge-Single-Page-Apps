import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`;


export default function App() {
  return (
    <main>
      <StyledLink to="/">
        <Header />
      </StyledLink>
      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"/>
        </Route>
      </Switch>
    </main>
  );
}

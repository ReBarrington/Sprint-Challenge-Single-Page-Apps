import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import styled from "styled-components";


export default function App() {
  return (
    <main>
      <Link to="/">
        <Header />
      </Link>
      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}

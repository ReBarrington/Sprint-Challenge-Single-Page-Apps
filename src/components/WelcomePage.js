import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CharacterCard from "./CharacterCard";


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
        <CharacterCard />
      </Link>
      </header>
    </section>
  );
}

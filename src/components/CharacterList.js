import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import "./CharacterCard.css";

const Search = styled.form `
display: flex;
justify-content: center;
border: 5px solid #ABD2EB;;
padding: 3%;
background-color: #ABD2EB;
`
const StyledInput = styled.input `
  width: 80%
  `

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results, " is response.data.results")
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
    <Search className="search">
      <StyledInput
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search by name"
        autoComplete="off"
      />
      </Search>
    <div className="boxes">
      {data.map(character => {
        return (
            <CharacterCard
              key={character.name}
              name={character.name}
              status={character.status}
              species={character.species}
              origin={character.origin}
              src={character.image}
            />
        );
      })}
    </div>
  </div>
  );
}

import React from "react";
import styled from "styled-components";

const BorderAroundCard = styled.div `
  border: 5px solid black;
  color: black;
  margin: 2%;
  padding: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  `

const CharacterCard = props => {
  return (
  <BorderAroundCard className="character-list" key={props.name}>
    <h2>{props.name}</h2>
    <p>Status: {props.status}</p>
    <p>Species: {props.species}</p>
    {/* <p>Origin: {props.origin.name}</p> */}
  </BorderAroundCard>
  );
}

export default CharacterCard
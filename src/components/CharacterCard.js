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

export default function CharacterCard() {
  return (
  <BorderAroundCard className="character-list">
    <h2>CHARACTER NAME</h2>
    <p>CHARACTER INFO</p>
  </BorderAroundCard>
  );
}

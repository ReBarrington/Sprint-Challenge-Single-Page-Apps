import React from "react";
import "./CharacterCard.css"


const CharacterCard = props => {
  return (
  <div className="character-list" key={props.name}>
    <h2>{props.name}</h2>
    <img src={props.src}></img>
    <p>Status: {props.status}</p>
    <p>Species: {props.species}</p>
    <p>Origin: {props.origin.name}</p>
  </div>
  );
}

export default CharacterCard
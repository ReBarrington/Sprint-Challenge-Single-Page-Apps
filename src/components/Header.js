import React from "react";
import "../index.css"

export default function Header(props) {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <img className="main-img" src={props.src}></img>
    </header>
  );
}


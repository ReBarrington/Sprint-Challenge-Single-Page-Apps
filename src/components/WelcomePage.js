import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./WelcomePage.css"


export default function WelcomePage(props) {
  return (
    <div>
      <section className="welcome-page">
        <header className="regular-header">
          <h1>Welcome to the ultimate fan site!</h1>
          <img className="main-img" src={props.src}></img>
          <Link to={`characters`}>
            <button>See Characters</button>
          </Link>
        </header>
      </section>
      <section>
        <footer>
        </footer>
      </section>
    </div>
  );
}

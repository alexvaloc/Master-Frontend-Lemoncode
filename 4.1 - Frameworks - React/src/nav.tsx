import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "./router";

export const Nav: React.FC = () => {
  console.log("Nav renderizado");
  return (
    <nav className="nav-links">
      <Link to={switchRoutes.root} className="nav-button">
        GitHub Members
      </Link>
      <Link to={switchRoutes.RickyMorty} className="nav-button">
        Rick & Morty Characters
      </Link>
    </nav>
  );
};

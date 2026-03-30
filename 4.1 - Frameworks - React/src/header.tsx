import React from "react";
import { Nav } from "./nav";

export const Header: React.FC = () => {
  return (
    <header className="page-header">
      <h1 className="project-title">Api Explorer Hub</h1>
      <p className="project-subtitle">
        Search GitHub organization members with filtering and pagination
      </p>
      <Nav />
    </header>
  );
};

import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="page-header">
      <h1 className="project-title">Org Members Viewer</h1>
      <p className="project-subtitle">
        Busca miembros de organizaciones en GitHub con filtrado y paginación
      </p>
    </header>
  );
};

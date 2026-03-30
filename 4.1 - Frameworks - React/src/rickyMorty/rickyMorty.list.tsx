import React from "react";
import { CharacterEntity } from "./rickyMorty.model";
import { RickyMortyRow } from "./rickyMorty.row";

interface Props {
  characters: CharacterEntity[];
}

export const RickyMortyList: React.FC<Props> = ({ characters }) => {
  if (!characters.length) {
    return <p>No se han encontrado personajes</p>;
  }
  return (
    <div className="list-container">
      <div className="list-header-row">
        <span>Avatar</span>
        <span>Id</span>
        <span>Name</span>
      </div>
      {characters.map((character) => (
        <RickyMortyRow key={character.id} character={character} />
      ))}
    </div>
  );
};

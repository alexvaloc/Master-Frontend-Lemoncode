import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "./rickyMorty.api";
import { CharacterDetailEntity } from "./rickyMorty.model";

export const RickyMortyDetail: React.FC = () => {
  const [character, setCharacter] = React.useState<
    CharacterDetailEntity | undefined
  >(undefined);
  const { id } = useParams<{ id: string }>(); //useParams devuelve string

  React.useEffect(() => {
    console.log(id);
    if (!id) return;
    const idNumber = Number(id);
    if (Number.isNaN(idNumber)) return;
    console.log(idNumber);
    getCharacterDetail(idNumber)
      .then((json) => setCharacter(json))
      .catch(() => console.log("Network error loading member"));
  }, [id]);

  return (
    <div className="detail-page">
      <div className="detail-card">
        <div className="detail-header">
          <img
            className="detail-avatar"
            src={character?.image}
            alt={character?.name}
          />
          <div>
            <h3 className="detail-title">{character?.name}</h3>
            <div className="detail-subtitle">Character ID: {id}</div>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-field">
            <div className="detail-field-label">Status</div>
            <div className="detail-field-value">{character?.status}</div>
          </div>
          <div className="detail-field">
            <div className="detail-field-label">Species</div>
            <div className="detail-field-value">{character?.species}</div>
          </div>
        </div>

        <div className="detail-actions">
          <Link to="/rick-y-morty" className="detail-back">
            Navigate back to the List of Characters
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import {
  addCharacterToFavorites,
  removeCharacterFromFavorites,
} from "../../store/actions";
import { Character } from "../../types";
import { QuestionIcon } from "../icons/question";
import "./character-card.styles.css";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const {
    image,
    name,
    status,
    species,
    origin,
    location,
    id,
    gender,
    type,
    url,
  } = character;

  const dispatch = useAppDispatch();

  const favorites =
    useAppSelector((state: RootState) => state.character.favorites) || [];

  const isFavorite = favorites.find((v) => v.id === id);

  const [isLoading, setIsLoading] = useState(true);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="character-card">
      <img
        alt={name}
        className={`character-image ${isLoading ? "loading" : ""}`}
        src={image}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      <div className="content-container">
        <div className="content">
          <h4 className="name">{name}</h4>
          <p className="status">
            {status} - {species}
          </p>
          <p className="last-known">Last known location:</p>
          <p className="location-name">{location.name}</p>
          <p className="first-seen">First seen in:</p>
          <p className="origin-name">{origin.name}</p>
          <div className="question-button-container">
            <button
              onMouseOver={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              <QuestionIcon />
              <div className={`tooltip ${isTooltipVisible ? "visible" : ""}`}>
                <div>
                  <span>ID:</span>
                  <span>{id}</span>
                </div>
                <div>
                  <span>name:</span>
                  <span>{name}</span>
                </div>
                <div>
                  <span>status:</span>
                  <span>{status}</span>
                </div>
                <div>
                  <span>species:</span>
                  <span>{species}</span>
                </div>
                <div>
                  <span>Last known location:</span>
                  <span>{location.name}</span>
                </div>
                <div>
                  <span>First seen in:</span>
                  <span>{origin.name}</span>
                </div>
                <div>
                  <span>gender:</span>
                  <span>{gender}</span>
                </div>
                <div>
                  <span>type:</span>
                  <span>{type || "#"}</span>
                </div>
                <div>
                  <span>url:</span>
                  <span>{url}</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <button
          onClick={() =>
            !isFavorite
              ? addCharacterToFavorites(character)(dispatch)
              : removeCharacterFromFavorites(id)(dispatch)
          }
          type="button"
          className={`${isFavorite ? "favorite" : ""} action-button`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        {isFavorite && <div className="corner-bar">Favorite!</div>}
      </div>
    </div>
  );
};

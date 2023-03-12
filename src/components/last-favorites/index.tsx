import { RootState, useAppSelector } from "../../store";
import { CharacterCard } from "../character-card";
import "./last-favorites.styles.css";

export const LastFavorites: React.FC = () => {
  const lastThreeFavorites =
    useAppSelector((state: RootState) =>
      state.character.favorites?.slice()?.reverse()?.slice(0, 3)
    ) || [];
  return (
    <div className="last-favorites">
      {lastThreeFavorites.length > 0 ? (
        <div className="characters-container">
          {lastThreeFavorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div className="no-data">There is no character in Favorite list!</div>
      )}
    </div>
  );
};

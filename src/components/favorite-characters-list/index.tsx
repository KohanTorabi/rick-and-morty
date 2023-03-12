import { RootState, useAppSelector } from "../../store";
import { CharacterCard } from "../character-card";

export const FavoriteCharactersList: React.FC = () => {
  const favorites =
    useAppSelector((state: RootState) =>
      state.character.favorites?.slice()?.reverse()
    ) || [];
  return (
    <div className="characters-list">
      <div className="characters-container">
        {favorites?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

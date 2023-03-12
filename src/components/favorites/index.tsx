import { FavoriteCharactersList } from "../favorite-characters-list";
import "./favorites.styles.css";

const Favorites: React.FC = () => {
  return (
    <div className="favorites">
      <h1 className="title">Favorite Characters</h1>
      <div className="spacer" />
      <FavoriteCharactersList />
    </div>
  );
};

export default Favorites;

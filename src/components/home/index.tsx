import { CharactersList } from "../characters-list";
import { LastFavorites } from "../last-favorites";
import "./home.styles.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2 className="title">Last Favorites</h2>
      <LastFavorites />
      <div className="spacer" />
      <h3 className="title">All Characters</h3>
      <CharactersList />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { RoutesPath } from "../../../constants";
import "./header.styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="root-container">
        <div className="logo-container">
          <img src="/logo192.png" alt="logo" />
          <Link to={RoutesPath.Home}>
            <h1>Rick & Morty</h1>
          </Link>
        </div>
        <nav>
          <ul>
            {[
              { name: "Home", url: RoutesPath.Home },
              { name: "Favorites", url: RoutesPath.Favorites },
            ].map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

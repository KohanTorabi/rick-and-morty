import { Link } from "react-router-dom";
import { RoutesPath } from "../../constants";
import "./no-match.styles.css";

const NoMatch: React.FC = () => {
  return (
    <div className="no-match">
      <img src="/question.png" alt="Not Found" />
      <p>
        Looks like you've wandered into an alternate dimension, because this
        page doesn't exist in our universe
        <br />
        just like the Plumbus X-4!
      </p>
      <Link to={RoutesPath.Home}>Go to Home</Link>
    </div>
  );
};

export default NoMatch;

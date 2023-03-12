import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./components/favorites";
import Home from "./components/home";
import RootContainer from "./components/layout/root-container";
import NoMatch from "./components/no-match";
import { RoutesPath } from "./constants";
import "./index.css";

function App() {
  return (
    <Router>
      <RootContainer>
        <Routes>
          <Route path={RoutesPath.Favorites} element={<Favorites />} />
          <Route path={RoutesPath.Home} element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </RootContainer>
    </Router>
  );
}

export default App;

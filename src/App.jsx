import React from "react";
import Page from "./views/Checkout";
import { Routes, Route, Switch } from "react-router-dom";
import PrizePools from "./views/PrizePools";
import Checkout from "./views/Checkout";
import Collections from "./views/Collections";
import ComingSoon from "./views/ComingSoon";
import ComingSoonDark from "./views/ComingSoonDark";
import LandingPage from "./views/LandingPage";
import Roadmap from "./views/Roadmap";
import Team from "./views/Team";
import Vault from "./views/Vault";
import Subscribe from "./views/Subscribe";
const App = () => {
  return (
    <>
      <Page />
      <Routes>
        <Route exact path="./views/Checkout" element={<Checkout />} />
        <Route exact path="./views/collections" element={<Collections />} />
        <Route exact path="./views/team" element={<Team />} />
        <Route exact path="./views/comingson" element={<ComingSoon />} />
        <Route
          exact
          path="./views/comingsoondark"
          element={<ComingSoonDark />}
        />
        <Route exact path="./views/landingpage" element={<LandingPage />} />
        <Route exact path="./views/roadmap" element={<Roadmap />} />
        <Route exact path="./views/prizetools" element={<PrizePools />} />
        <Route exact path="./views/subscribe" element={<Subscribe />} />
        <Route exact path="./views/vault" element={<Vault />} />
      </Routes>
    </>
  );
};

export default App;

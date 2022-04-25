import React from "react";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import PrizePools from "./views/PrizePools";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import Collections from "./views/Collections";
import ComingSoon from "./views/ComingSoon";
import ComingSoonDark from "./views/ComingSoonDark";
import LandingPage from "./views/LandingPage";
import Roadmap from "./views/Roadmap";
import Team from "./views/Team";
import Vault from "./views/Vault";
import Subscribe from "./views/Subscribe";
import HowItWorks from "./views/HowItWorks";
import LinksPage from "./views/Links";
import MintConnect from "./views/MintConnect";
import MintDisconnect from "./views/MintDisconnect";
import Header from "./components/modules/Header";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Routes>
          <Route path="/" element={<LinksPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/team" element={<Team />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/mintconnect" element={<MintConnect />} />
          <Route path="/mintdisconnect" element={<MintDisconnect />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/prizepools" element={<PrizePools />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/comingsoondark" element={<ComingSoonDark />} />
        </Routes>
      </Switch>
    </>
  );
};

export default App;

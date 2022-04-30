import React, { useState } from "react";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import PrizePools from "./views/PrizePools";
import Home from "./views/Home";
import HomeDark from "./views/HomeDark";
import Checkout from "./views/Checkout";
import Collections from "./views/Collections";
import ComingSoon from "./views/ComingSoon";
import ComingSoonDark from "./views/ComingSoonDark";
import LoadingPage from "./views/LoadingPage";
import Roadmap from "./views/Roadmap";
import Team from "./views/Team";
import Vault from "./views/Vault";
import Subscribe from "./views/Subscribe";
import HowItWorks from "./views/HowItWorks";
import LinksPage from "./views/Links";
import MintConnect from "./views/MintConnect";
import MintDisconnect from "./views/MintDisconnect";
import Header from "./components/modules/Header";
import WaltsVault from "./views/WaltsVault";
import Passengers from "./views/Passengers";
const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeToDarkTheme = () => {
    console.log("Changes to Dark Theme");
    setIsLightTheme(false);
  };
  const changeToLightTheme = () => {
    console.log("Changes to Light Theme");
    setIsLightTheme(true);
  };
  return (
    <>
      {isLightTheme ? (
        <div className="app light-theme">
          <Switch>
            <Routes>
              <Route path="/" element={<LinksPage />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/homedark" element={<HomeDark />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/team" element={<Team />} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/loadingpage" element={<LoadingPage />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/mintconnect" element={<MintConnect />} />
              <Route path="/mintdisconnect" element={<MintDisconnect />} />
              <Route path="/howitworks" element={<HowItWorks />} />
              <Route path="/prizepools" element={<PrizePools />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/comingsoondark" element={<ComingSoonDark />} />
              <Route path="/waltsvault" element={<WaltsVault />} />
              <Route path="/passengers" element={<Passengers />} />
            </Routes>
          </Switch>
        </div>
      ) : (
        <div className="app dark-theme">
          <Switch>
            <Routes>
              <Route path="/" element={<LinksPage />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/homedark" element={<HomeDark />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/team" element={<Team />} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/loadingpage" element={<LoadingPage />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/mintconnect" element={<MintConnect />} />
              <Route path="/mintdisconnect" element={<MintDisconnect />} />
              <Route path="/howitworks" element={<HowItWorks />} />
              <Route path="/prizepools" element={<PrizePools />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/comingsoondark" element={<ComingSoonDark />} />
              <Route path="/waltsvault" element={<WaltsVault />} />
              <Route path="/passengers" element={<Passengers />} />
            </Routes>
          </Switch>
        </div>
      )}
    </>
  );
};

export default App;

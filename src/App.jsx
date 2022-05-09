import React, { useState } from "react";
import { ToastContainer, Slide, Zoom, Flip, Bounce } from "react-toastify";
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
import "react-toastify/dist/ReactToastify.css";
import Links from "./views/Links";
import { HashRouter } from "react-router-dom";

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
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-light-theme"
            transition={Slide}
          />
          <div className="app light-theme">
            <Switch>
              <Routes>
                <Route path="/" element={<ComingSoon />} />
                <Route exact path="/links" element={<Links />} />
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
        </>
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-dark-theme"
            transition={Slide}
          />
          <div className="app dark-theme">
            <Switch>
              <Routes>
                <Route path="/" element={<ComingSoon />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/links" element={<Links />} />
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
        </>
      )}
    </>
  );
};

export default App;

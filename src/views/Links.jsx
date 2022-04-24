import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/home">home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/comingsoon">comingsoon</Link>
      <Link to="/comingsoondark">comingsoondark</Link>
      <Link to="/team">Team</Link>
      <Link to="/roadmap">Roadmap</Link>
      <Link to="/howitworks">HowitWorks</Link>
      <Link to="/mintconnect">MintConnect</Link>
      <Link to="/mintdisconnect">MintDisconnect</Link>
      <Link to="/landingpage">landingpage</Link>
      <Link to="/prizepools">Prizepools</Link>
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/vault">Vault</Link>
    </div>
  );
};

export default Links;

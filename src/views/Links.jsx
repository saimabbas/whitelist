import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/home">
        1. <span>Home</span>
      </Link>
      <Link to="/homedark">
        1. <span>Home Dark</span>
      </Link>
      <Link to="/checkout">
        2. <span>Checkout</span>
      </Link>
      <Link to="/collections">
        3. <span>Collections</span>
      </Link>
      <Link to="/comingsoon">
        4. <span>Coming Soon 1</span>
      </Link>
      <Link to="/comingsoondark">
        5. <span>Coming Soon 2</span>
      </Link>
      <Link to="/team">
        6. <span>Team</span>
      </Link>
      <Link to="/roadmap">
        7. <span>Roadmap</span>
      </Link>
      <Link to="/howitworks">
        8. <span>How It Works</span>
      </Link>
      <Link to="/mintconnect">
        9. <span>Mint Connect</span>
      </Link>
      <Link to="/mintdisconnect">
        10. <span>Mint Disconnect</span>
      </Link>
      <Link to="/loadingpage">
        11. <span>Loading</span>
      </Link>
      <Link to="/prizepools">
        12. <span>Prize Pools</span>
      </Link>
      <Link to="/subscribe">
        13. <span>Subscribe</span>
      </Link>
      <Link to="/vault">
        14. <span>Vault</span>
      </Link>
      <Link to="/waltsvault">
        15. <span>Walt's Vault</span>
      </Link>
      <Link to="/passengers">
        14. <span>Passengers</span>
      </Link>
    </div>
  );
};

export default Links;

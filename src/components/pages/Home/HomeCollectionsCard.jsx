import React from "react";

const HomeCollectionsCard = (props) => {
  return (
    <div className="collections-grid-card">
      <div className="cgc-top">
        <h6>
          <img src={props.collectionLogoImg} alt="LogoLight" />{" "}
          {props.collectionName}
        </h6>
      </div>
      <div className="cgc-bottom">
        <img src={props.collectionImg} alt="CollectionsCard" />
        <div className="coming-tag">
          {props.collectionComingTime} <span></span>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionsCard;

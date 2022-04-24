import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../assets/icons/ChevronUp";

const LetUsHelpCard = (props) => {
  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>
        <div className="faq-q">
          <h5>{props.ques}</h5>
          <ChevronUp color="#1F194D" />
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="faq-a">{props.children}</div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default LetUsHelpCard;

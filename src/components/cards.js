import React, { createElement } from "react";
import { cardMap } from "../cards";

export const CardGroup = ({ cardGroup, index }) => (
  <div>
    <h3> card group {index + 1}</h3>
    <div className="cardGroup">
      {cardGroup.cards.map((cardName, i) => {
        const CardComponent = cardMap.get(cardName);
        // const card = createElement(cardMap.get(cardName));
        return <CardComponent cardOrder = {i} />;
      })}
    </div>
  </div>
);

const colors = ["purple", "black", "white", "grey", "red"];
export const Card = ({ title, children, cardOrder }) => (
  <div className={`card ${colors[cardOrder % colors.length]}`}>
    <h2>{title}</h2>
    {children}
  </div>
);

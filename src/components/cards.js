import React, { createElement } from "react";
import { cardMap } from "../cards";

export const CardGroup = ({ cardGroup: { title, cards: groupCards } }) => (
  <div>
    <h3> {title}</h3>
    <div className="cardGroup">
      {groupCards.map((cardName, index) => {
        const CardComponent = cardMap.get(cardName);
        // const card = createElement(cardMap.get(cardName));
        return <CardComponent cardOrder={index} />;
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

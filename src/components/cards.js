import React, { createElement } from "react";
import { cardMap } from "../cards";

export const CardGroup = ({ cardGroup, index }) => (
  <div>
    <h3> card group {index + 1}</h3>
    <div className="cardGroup">
      {cardGroup.cards.map((cardName, i) => (
        <Card key={`_index_${i}`} cardName={cardName} index={i} />
      ))}
    </div>
  </div>
);

const colors = ["purple", "black", "white", "grey", "red"];
export const Card = ({ cardName, index }) => {
  const CardComponent = cardMap.get(cardName);
  // const card = createElement(cardMap.get(cardName));
  return (
    <div className={`card ${colors[index % colors.length]}`}>
      <h2>{CardComponent.title}</h2>
      <CardComponent />
    </div>
  );
};

import React, { createElement } from "react";
import { containerMap } from "../containers";

export const CardGroup = ({ cardGroup, index }) =>  (
    <div>
      <h3> card group {index + 1}</h3>
      <div className="cardGroup">
        {cardGroup.cards.map((cardName, i) => (
          <Card
            key={`_index_${i}`}
            cardName={cardName}
            index={i}
          />
        ))}
      </div>
    </div>
  );

const colors = ["purple", "black", "white", "grey", "red"];
export const Card = ({ cardName, index }) => {
  const container = createElement(containerMap.get(cardName));
  return (
    <div className={`card ${colors[index % colors.length]}`}>
      {container}
    </div>
  );
};

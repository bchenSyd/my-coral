import React, { createElement } from "react";
import { containerMap } from "../containers";

export const TileGroup = ({ tileGroup, index }) => (
  <div>
    <h3> tile group {index + 1}</h3>
    <div className="tileGroup">
      {tileGroup.tiles.map((tileName, i) => (
        <Tile key={`_index_${i}`} tileName={tileName} />
      ))}
    </div>
  </div>
);

export const Tile = ({ tileName }) => {
  const container = createElement(containerMap.get(tileName));
  return <div className="tile">{container}</div>;
};

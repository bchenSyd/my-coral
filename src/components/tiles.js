import React, { createElement } from "react";
import { containerMap } from "../containers";

import Appointments from "../containers/appointments";

export const TileGroup = ({ tileGroup }) => (
  <div>
    {tileGroup.tiles.map((tileName, index) => (
      <Tile key={`_index_${index}`} tileName={tileName} />
    ))}
  </div>
);

export const Tile = ({ tileName }) => {
  console.log(containerMap, '--', tileName);
  const container = createElement(containerMap.get(tileName));
  console.log(container);
  return <div>{container}</div>;
};

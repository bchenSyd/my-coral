import React, { createElement } from "react";
import { containerMap } from "../containers";

import Appointments from "../containers/appointments";

export const TileGroup = ({ tileGroup, index }) => (
  <div>
    <h3> tile group {index + 1}</h3>
    <div className='tileGroup'>
      {tileGroup.tiles.map((tileName, index) => (
        <Tile key={`_index_${index}`} tileName={tileName} />
      ))}
    </div>
  </div>
);

export const Tile = ({ tileName }) => {
  const container = createElement(containerMap.get(tileName));
  return <div className='tile'>{container}</div>;
};
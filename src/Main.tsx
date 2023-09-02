import React, { useState } from 'react';

import { gameSize, Tile, TileTypes } from './consts';
import Components from './Components';

const tiles: Tile[][] =
  Array.from({ length: gameSize }, (_, y) =>
    Array.from({ length: gameSize }, (_, x) =>
      ({ type: 'empty', x, y })
    ));

export default function Main() {
  const [selected, setSelected] = useState<TileTypes | undefined>();

  return <>
    <div id="table" />
    <Components selected={[selected, setSelected]} />
    <main>
      {tiles.map(row =>
        <div key={row[0].y}>{row.map(tile =>
          <TileComponent tile={tile} key={tile.x} />
        )}</div>
      )}
    </main>
  </>;
}

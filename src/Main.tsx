import React from 'react';

import { gameSize, Tile } from './consts';

function TileComponent({ tile }: { tile: Tile }) {
  return <div />;
}

const tiles: Tile[][] =
  Array.from({ length: gameSize }, (_, y) =>
    Array.from({ length: gameSize }, (_, x) =>
      ({ type: 'empty', x, y })
    ));

export default function Main() {
  return <main>
    {tiles.map(row =>
      <div key={row[0].y}>{row.map(tile =>
        <TileComponent tile={tile} key={tile.x} />
      )}</div>
    )}
  </main>;
}

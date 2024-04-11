import React, { useState } from 'react';

import { gameSize, Tile, TileTypes } from './consts';
import Components from './Components';
import TileComponent from './TileComponent';

const Source = ({ type: 'src', x: 0, y: 0 }) satisfies Tile;

export default function Main() {
  const
    [tiles, setTiles] = useState<Tile[][]>(
      Array.from({ length: gameSize }, (_, y) =>
        Array.from({ length: gameSize }, (_, x) =>
          ({ type: 'empty', x, y })
        )));

  tiles[Source.y][Source.x] = Source;

  const [selected, setSelected] = useState<TileTypes | undefined>();

  function onTileClick(x: number, y: number) {
    setTiles(tiles => {
      tiles[y][x].type = selected ?? 'empty';
      return tiles.slice();
    });
  }

  function onTileRightClick(x: number, y: number, e: React.MouseEvent) {
    e.preventDefault();
    setTiles(tiles => {
      tiles[y][x].type = 'empty';
      return tiles.slice();
    });
  }

  return <>
    <div id="table" />
    <Components selected={[selected, setSelected]} />
    <main>
      {tiles.map(row =>
        <div key={row[0].y}>
          {row.map(tile =>
            <div key={tile.x}
              onClick={() => onTileClick(tile.x, tile.y)}
              onContextMenu={(e) => onTileRightClick(tile.x, tile.y, e)}>
              <TileComponent
                tile={tile} key={tile.x} />
            </div>
          )}</div>
      )}
    </main>
  </>;
}

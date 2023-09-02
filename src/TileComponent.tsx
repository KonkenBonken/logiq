import React from 'react';

import { Tile } from './consts';

export default function TileComponent({ tile }: { tile: Tile }) {
  return <div>
    {tile.type !== 'empty' && tile.type}
  </div>;
}

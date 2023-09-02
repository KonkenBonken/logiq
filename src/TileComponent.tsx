import React from 'react';

import { Tile, components } from './consts';

export default function TileComponent({ tile }: { tile: Tile }) {
  if (tile.type === 'empty')
    return <div />;

  const component = components[tile.type];

  return <div>
    <img src={component.imgSrc} alt={tile.type + ' gate'} />
  </div>;
}

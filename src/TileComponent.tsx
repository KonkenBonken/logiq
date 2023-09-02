import React from 'react';

import { TileTypes, components } from './consts';

export default function TileComponent({ tile }: { tile: { type: TileTypes } }) {
  if (tile.type === 'empty')
    return <div />;

  const component = components[tile.type];

  return <div>
    <img src={component.imgSrc} alt={tile.type + ' gate'} />
  </div>;
}

import React from 'react';

import { TileTypes, components } from './consts';

export default function TileComponent({ tile }: { tile: { type: TileTypes } }) {
  if (tile.type === 'empty')
    return <></>;

  if (tile.type === 'wire')
    return <div className="wire" />;

  const component = components[tile.type];

  return <>
    <img src={component.imgSrc} alt={tile.type + ' gate'} />
    {Array.from({ length: component.inputCount }, (_, i) =>
      <i key={i} />
    )}
    <b />
  </>;
}

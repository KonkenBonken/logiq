import React, { type useState } from 'react';
import clsx from 'clsx';

import { TileTypes, components, type Component } from './consts';

export default function Components(
  { selected: [selected, setSelected] }: { selected: ReturnType<typeof useState<TileTypes | undefined>> }
) {
  return <div id="components" >
    {(Object.entries(components) as [TileTypes, Component][])
      .map(([name, component]) =>
        <div
          className={clsx({ selected: selected === name })}
          onClick={() => setSelected(name)}
        >{name}</div>
      )}
  </div>;
}
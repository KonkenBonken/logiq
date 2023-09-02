import React, { type useState } from 'react';
import clsx from 'clsx';

import { TileTypes, components, type Component } from './consts';
import TileComponent from './TileComponent';

export default function Components(
  { selected: [selected, setSelected] }: { selected: ReturnType<typeof useState<TileTypes | undefined>> }
) {
  return <div id="components" >
    {(Object.entries(components) as [TileTypes, Component][])
      .map(([type, component]) =>
        <div
          key={type}
          className={clsx({ selected: selected === type })}
          onClick={() => setSelected(type)}
        >
          <TileComponent tile={{ type }} />
        </div>
      )}
    <div
      className={clsx({ selected: selected === 'wire' })}
      onClick={() => setSelected('wire')}
    >
      <TileComponent tile={{ type: 'wire' }} />
    </div>
  </div>;
}

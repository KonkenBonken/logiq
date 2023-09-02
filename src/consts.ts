export const
  gameSize = 10;

type ComponentTypes = 'or' | 'and';
export type TileTypes = 'empty' | ComponentTypes;

export interface Tile {
  type: TileTypes,
  x: number,
  y: number
}

export class Component {
  constructor(
    readonly computer: (...input: boolean[]) => boolean
  ) { }

  get inputCount() {
    return this.computer.length;
  }
}

export const components = {
  or: new Component((a, b) => a || b),
  and: new Component((a, b) => a && b),
} satisfies Record<ComponentTypes, Component>;

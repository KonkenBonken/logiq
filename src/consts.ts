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
  readonly imgSrc: string;

  constructor(
    readonly type: ComponentTypes,
    readonly computer: (...input: boolean[]) => boolean
  ) {
    this.imgSrc = `/gates/${this.type}.webp`;
  }

  get inputCount() {
    return this.computer.length;
  }
}

export const components = {
  or: new Component('or', (a, b) => a || b),
  and: new Component('and', (a, b) => a && b),
} satisfies Record<ComponentTypes, Component>;

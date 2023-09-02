export const
  gameSize = 10;

type ComponentTypes = 'and' | 'nand' | 'nor' | 'not' | 'or' | 'xnor' | 'xor';
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
  and: new Component('and', (a, b) => a && b),
  nand: new Component('nand', (a, b) => !(a && b)),
  nor: new Component('nor', (a, b) => (!a && !b)),
  not: new Component('not', (a) => !a),
  or: new Component('or', (a, b) => a || b),
  xnor: new Component('xnor', (a, b) => (a && b) || (!a && !b)),
  xor: new Component('xor', (a, b) => a !== b),
} satisfies Record<ComponentTypes, Component>;

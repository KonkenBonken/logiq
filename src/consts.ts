export const
  gameSize = 10;

type TileTypes = 'empty';

export interface Tile {
  type: TileTypes,
  x: number,
  y: number
}

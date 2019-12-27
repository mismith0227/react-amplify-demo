import palette, { Palette } from './palette'

type PaletteLevelKeys =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000

export const getColor = (color: keyof Palette, key: PaletteLevelKeys) =>
  (palette[color] as any)[key] || ''

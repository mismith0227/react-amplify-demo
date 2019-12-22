import { PaletteColorKeys, PaletteLevelKeys } from './'

export const getColor = (color: PaletteColorKeys, key: PaletteLevelKeys) => ({
  theme,
}: any): string => (theme.palette[color] as any)[key] || ''

export const getColorWithAlpha = (
  color: PaletteColorKeys,
  key: PaletteLevelKeys
) => (props: any) => getColor(color, key)(props)

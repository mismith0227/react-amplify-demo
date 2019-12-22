import palette, { Palette as PaletteType } from './palette'

export type Palette = PaletteType
export type Theme = typeof theme

const theme = {
  palette,
}

export default theme

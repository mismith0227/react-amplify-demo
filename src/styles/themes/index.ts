import darkTheme, {
  Palette as DarkPalette,
  Theme as DarkThemeType,
} from './dark'

import defaultTheme, {
  Palette as DefaultPalette,
  Theme as DefaultThemeType,
} from './default'

export type Theme = DefaultThemeType | DarkThemeType

export type Palettes = DefaultPalette | DarkPalette

export type PaletteColorKeys = keyof Palettes

export type PaletteLevelKeys =
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

export interface ThemeProps {
  readonly theme: Theme
  readonly palette: Palettes
}

export const themes = {
  default: () => defaultTheme,
  dark: () => darkTheme,
}

export type Themes = keyof typeof themes

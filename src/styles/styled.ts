import * as styledComponents from 'styled-components'
import { ThemeProps } from './themes'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeProps
>

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme }
export default styled

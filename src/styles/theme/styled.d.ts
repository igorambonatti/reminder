import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      white: string
      gray: string
      purple: string
      lightGray: string
      background: string
      text: string
      error: string
      font: string
    }
  }
}

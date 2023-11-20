import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased !important;
}

  body, input, button{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`

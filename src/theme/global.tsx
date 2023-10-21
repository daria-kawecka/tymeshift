import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    overflow: hidden;
    font-family: 'Lato', Arial, sans-serif;
   
  }

  body,
  #root {
    height: 100%;
    overflow-y: auto;
  }

  button{
    font-family: 'Lato', Arial, sans-serif;
  }

  html {
    height: 100%;
    overflow-x: hidden;
  }
`;

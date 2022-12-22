import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { backgroundColor } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    
  }
  
  a {
    text-decoration: none;
  }

  input::placeholder, textarea::placeholder {
    color: #9e9e9e;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${backgroundColor};
    max-height:960px;
    margin:0 auto;
  }
`;
export default GlobalStyle;

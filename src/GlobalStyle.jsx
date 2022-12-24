import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { maincolor } from './theme';

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
    font-family: 'Pretendard', sans-serif;
    background-color: ${maincolor};
    margin:0 auto;
  }

  button {
    font-family: inherit;
  }
`;
export default GlobalStyle;

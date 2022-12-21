import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
<<<<<<< HEAD
import { backgroundColor } from './theme';
=======
import { maincolor, mainFont } from './theme';
>>>>>>> a89af47 (feature: created modal layout)

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
<<<<<<< HEAD
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${backgroundColor};
=======
    ${mainFont};
    font-family: 'Pretendard-Regular', sans-serif;
    background-color: ${maincolor};
>>>>>>> a89af47 (feature: created modal layout)
    max-height:960px;
    margin:0 auto;
  }
`;
export default GlobalStyle;

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

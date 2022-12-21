import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

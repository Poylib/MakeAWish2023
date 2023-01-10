import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import Intro from './pages/Intro';
import Home from './pages/Home';
import MyWish from './pages/MyWish';
import MyLike from './pages/MyLike';
import Keyword from './pages/Keyword';
import MainBackground from './components/MainBackground';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/wish' element={<MyWish />} />
          <Route path='/like' element={<MyLike />} />
          <Route path='/keyword' element={<Keyword />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

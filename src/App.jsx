import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import Intro from './pages/Intro';
import Home from './pages/Home';
import MyWish from './pages/MyWish';
import MyLike from './pages/MyLike';
import Keyword from './pages/Keyword';
import { useEffect } from 'react';
import { api } from './api';

const App = () => {
  let uuid = localStorage.getItem('uuid');
  useEffect(() => {
    if (!uuid) {
      (async () => {
        try {
          const { data } = await api.get('id');
          localStorage.setItem('uuid', data.uuid);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/wish' element={<MyWish />} />
          <Route path='/like' element={<MyLike />} />
          <Route path='/search' element={<Keyword />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

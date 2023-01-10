import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import Intro from './pages/Intro';
import Home from './pages/Home';
import MyWishList from './pages/MyWishList';
// import MyLikeList
// import Keyword from
import MainBackground from './components/MainBackground';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/wish' element={<MyWishList />} />
        </Routes>
        {/* <MainBackground /> */}
      </ThemeProvider>
    </>
  );
};

export default App;

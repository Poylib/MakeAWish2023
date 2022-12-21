import { useState } from 'react';
import styled from 'styled-components';
import WishModal from '../../components/WishModal';
import Button from '../../components/Button';
import { headercolor, blackcolor } from '../../theme';
import MainBackground from '../../components/MainBackground';
const Home = () => {
  const [isWishModal, setIsWishModal] = useState(true);

  return (
    <HomeContainer>
      <article>
        <div className='header-box'>
          <h2>2023 새해</h2>
          <h1>소원을 빌어보세요</h1>
          <h4>Make a wish for 2023</h4>
        </div>
        <Button
          onClick={() => {
            setIsWishModal(true);
          }}
          text='소원 빌러가기'
          className='head-font'
        />
      </article>
      <MainBackground />
      {isWishModal && <WishModal isWishModal={isWishModal} setIsWishModal={setIsWishModal} />}
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @font-face {
    font-family: 'CWDangamAsac-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  article {
    position: relative;
    width: 390px;
    height: 100vh;
    z-index: 100;
    margin: 0 auto;
    padding: 55px 1rem 1rem 1rem;
    background-color: inherit;
    font-family: 'CWDangamAsac-Bold';
    .header-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 30px;
        color: ${headercolor};
      }
      h1 {
        margin: 8px;
        font-size: 40px;
        color: ${blackcolor};
      }
      h4 {
        font-size: 10px;
        font-family: 'Noto Sans KR', sans-serif;
      }
    }
    button {
      font-family: 'CWDangamAsac-Bold';
      position: absolute;
      bottom: 0%;
    }
  }
`;

export default Home;

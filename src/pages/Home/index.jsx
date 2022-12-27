import { useState } from 'react';
import styled from 'styled-components';
import WishModal from '../../components/WishModal';
import CreatedModal from '../../components/CreatedModal';
import Button from '../../components/Button';
import { mainColor, contentFontColor } from '../../theme';
import MainBackground from '../../components/MainBackground';
const Home = () => {
  const [isWishModal, setIsWishModal] = useState(false);
  const [isCreatedModal, setIsCreatedModal] = useState(false);

  return (
    <HomeContainer>
      <article>
        <div className='header-box'>
          <h2>2023 새해</h2>
          <h1>소원을 빌어보세요</h1>
          <h4>Make a wish for 2023</h4>
        </div>
        <div className='footer-box'>
          <Button
            onClick={() => {
              setIsWishModal(true);
            }}
            text='소원 빌러가기'
            className='head-font'
          />
          <h4>DEOK MANI BADA</h4>
        </div>
      </article>
      <MainBackground />
      {isWishModal && <WishModal setIsWishModal={setIsWishModal} setIsCreatedModal={setIsCreatedModal} />}
      {isCreatedModal && <CreatedModal setIsCreatedModal={setIsCreatedModal} />}
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 390px;
    height: 100vh;
    z-index: 100;
    margin: 0 auto;
    padding: 40px 1rem 0.5rem 1rem;
    background-color: inherit;
    font-family: 'CWDangamAsac-Bold';
    color: ${contentFontColor};
    button {
      font-family: 'CWDangamAsac-Bold';
      border-radius: 24px;
      /* width: 240px; */
      /* height: 70px; */
    }
    .header-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 30px;
        color: ${mainColor};
      }
      h1 {
        margin: 8px;
        font-size: 40px;
        color: ${contentFontColor};
      }
      h4 {
        font-size: 13px;
        font-family: 'Noto Sans KR', sans-serif;
      }
    }
    .footer-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;
      h4 {
        font-size: 10px;
        margin: 20px 0 0 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
      }
    }
  }
`;

export default Home;

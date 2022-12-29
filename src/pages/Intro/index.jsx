import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';
import { mainColor, contentFontColor, wishButton, HomeButtonFont } from '../../theme';
import MainBackground from '../../components/MainBackground';
import useStore from '../../context/store';
import { fadeIn } from '../../utils/Animation.jsx';

const Intro = () => {
  const navigate = useNavigate();
  const { trueIntroPass } = useStore();
  const [isWishModal, setIsWishModal] = useState(false);
  const [isCreatedModal, setIsCreatedModal] = useState(false);
  const [fadeInHeader, setFadeInHeader] = useState(false);
  useEffect(() => {
    trueIntroPass();
    setTimeout(() => {
      setFadeInHeader(true);
    }, 1500);
  }, []);
  return (
    <HomeContainer>
      <IntroArticle>
        {fadeInHeader ? (
          <div className='header-box header-fade'>
            <h2>2023 새해</h2>
            <h1>소원을 빌어보세요</h1>
            <h4>Make a wish for 2023</h4>
          </div>
        ) : (
          <div className='header-box'></div>
        )}
        <div className='footer-box'>
          <Button onClick={() => navigate('/home')} text='소원 빌러가기' className='head-font' />
          <h4>DEOK MANI BADA</h4>
        </div>
      </IntroArticle>
    </HomeContainer>
  );
};

export const HomeContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  min-width: 375px;
  max-width: 430px;

  ${HomeButtonFont};
`;
const IntroArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 100vh;
  max-height: 800px;
  z-index: 100;
  padding: 3.5rem 1rem 1rem 1rem;
  background-color: inherit;
  font-family: 'CWDangamAsac-Bold';
  color: ${contentFontColor};

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
  .header-fade {
    animation: ${fadeIn} 2s;
  }
  .footer-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    button {
      font-family: 'CWDangamAsac-Bold';
      background-color: ${wishButton};
      padding: 1rem 3rem;
      font-size: 2rem;
      border-radius: 24px;
      box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;
    }
    h4 {
      font-size: 10px;
      margin: 20px 0 0 0;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: bold;
    }
  }
`;

export default Intro;

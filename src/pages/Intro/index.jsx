import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../../api';
import { mainColor, contentFontColor, wishButton, HomeButtonFont } from '../../theme';
import MainBackground from '../../components/MainBackground';
import useStore from '../../context/store';
import { fadeIn } from '../../utils/Animation';
import { Button } from '../Home';

const Intro = () => {
  const navigate = useNavigate();
  const { trueIntroPass } = useStore();
  const [fadeInHeader, setFadeInHeader] = useState(false);

  useEffect(() => {
    trueIntroPass();
    setTimeout(() => {
      setFadeInHeader(true);
    }, 1500);
  }, []);

  const getUuid = async () => {
    try {
      const { data } = await api.get('id');
      localStorage.setItem('uuid', data.uuid);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button
            onClick={() => {
              navigate('/home');
              {
                !localStorage.getItem('uuid') && getUuid();
              }
            }}
          >
            <button>소원 빌러가기</button>
          </Button>
          <h4>DEOK MANI BADA</h4>
        </div>
      </IntroArticle>
    </HomeContainer>
  );
};

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  min-width: 355px;
  max-width: 450px;
  ${HomeButtonFont};
`;
const IntroArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 440px;
  height: 720px;
  z-index: 10;
  padding: 3.5rem 0 1rem 0;
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
      font-size: 2rem;
    }
    h4 {
      font-size: 10px;
      margin-top: 20px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: bold;
    }
  }
`;

export default Intro;

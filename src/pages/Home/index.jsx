import styled from 'styled-components';
import useStore from '../../context/store';
import { useEffect, useState } from 'react';

import { HomeContainer } from '../Intro';
import { contentFontColor, headercolor, HomeButtonFont, wishButton } from '../../theme';
import MakeWishModal from '../../components/MakeWishModal';
import CreatedModal from '../../components/CreatedModal';
import ReadWishModal from '../../components/ReadWishModal';
import MainBackground from '../../components/MainBackground';
import Button from '../../components/Button';
import onePocket from '../../assets/main/pockets/shadow.png';
import pocket from '../../assets/main/pockets/004.png';
import wishText from '../../assets/main/pockets/wish-text.png';
import { bell } from '../../utils/Animation.jsx';

const Home = () => {
  const [pocketCounts, setPocketCounts] = useState(200000);
  const [wroteWish, setWroteWish] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isMakeWish, setIsMakeWish] = useState(false);
  const [isCreatedModal, setIsCreatedModal] = useState(false);
  const [isReadWish, setIsReadWish] = useState(false);
  const { falseIntroPass } = useStore();
  useEffect(() => {
    falseIntroPass();
  }, []);
  return (
    <HomeContainer>
      <HomeArticle>
        <div className='home-header'>
          <div className='font-box'>
            <h2 className='header-color'>{pocketCounts.toLocaleString()}</h2>
            <h2>개의</h2>
          </div>
          <h2>소원이 달렸어요</h2>
        </div>
        <div className='home-body'>
          <div className='text'>
            <img src={wishText} />
          </div>
          <div className='home-img'>
            <div className='column wish-btn' onClick={() => setIsMakeWish(true)}>
              <img src={onePocket} />
            </div>
            {wroteWish.map(v => {
              return (
                <div className='column' key={v} onClick={() => setIsReadWish(true)}>
                  <img src={pocket} />
                </div>
              );
            })}
          </div>
        </div>
        <div className='home-footer'>
          <Button text='다른 소원들 보기' />
        </div>
      </HomeArticle>
      {isMakeWish && <MakeWishModal setIsMakeWish={setIsMakeWish} setIsCreatedModal={setIsCreatedModal} />}
      {isCreatedModal && <CreatedModal setIsCreatedModal={setIsCreatedModal} />}
      {isReadWish && <ReadWishModal setIsReadWish={setIsReadWish} />}
    </HomeContainer>
  );
};

const HomeArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0%;
  width: 100%;
  max-width: 440px;
  height: 45rem;
  z-index: 100;
  padding: 3.5rem 0 1rem 0;
  background-color: inherit;
  ${HomeButtonFont};
  font-family: 'CWDangamAsac-Bold';
  color: ${contentFontColor};
  .home-header {
    display: flex;
    padding-left: 5%;
    justify-content: center;
    flex-direction: column;
    .font-box {
      display: flex;
      padding-bottom: 7px;
      .header-color {
        color: ${headercolor};
        margin-right: 6px;
      }
    }
    h2 {
      font-size: 30px;
      color: ${contentFontColor};
    }
  }
  .home-body {
    position: relative;
    width: 100%;
    margin: 0 auto;
    .text {
      position: absolute;
      top: -5%;
      left: 3%;
      img {
        width: 70px;
      }
    }
    .column {
      float: left;
      text-align: center;
      width: 33.33%;
      padding: 5px;
    }
    img {
      width: 70px;
      margin: 0.4rem 1rem;
    }

    .wish-btn {
      transform-origin: center;
      animation: ${bell} 2s infinite linear;
    }
  }
  .home-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0 30px 0;
    button {
      font-family: 'CWDangamAsac-Bold';
      background-color: ${wishButton};
      padding: 1rem 3rem;
      font-size: 2rem;
      border-radius: 24px;
      box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;
    }
  }
`;

export default Home;

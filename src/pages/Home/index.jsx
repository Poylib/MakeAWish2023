import { useEffect, useState } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import useStore from '../../context/store';
import MakeWishModal from '../../components/MakeWishModal';
import CreatedModal from '../../components/CreatedModal';
import ReadWishModal from '../../components/ReadWishModal';
import LimitModal from '../../components/LimitModal';
import Button from '../../components/Button';
import MainBackground from '../../components/MainBackground';
import { HomeContainer } from '../Intro';
import { contentFontColor, headercolor, HomeButtonFont, mainColor, maincolor, redButton, wishButton } from '../../theme';
import onePocket from '../../assets/main/pockets/shadow.png';
import pocket from '../../assets/main/pockets/004.png';
import wishText from '../../assets/main/pockets/wish-text.png';
import { bell } from '../../utils/Animation';
import TopKeyword from '../../components/TopKeyword';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import MenuButton from '../../components/MenuButton';

const Home = () => {
  const [pocketCounts, setPocketCounts] = useState(200000);
  const [wroteWish, setWroteWish] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [wishId, setWishId] = useState();
  const [isMakeWish, setIsMakeWish] = useState(false);
  const [isCreatedModal, setIsCreatedModal] = useState(false);
  const [isReadWish, setIsReadWish] = useState(false);
  const [isLimitModal, setIsLimitModal] = useState(false);
  const { falseIntroPass } = useStore();

  useEffect(() => {
    falseIntroPass();
    getWish();
    (async () => {
      const {
        data: { wishes },
      } = await api.get('wish-count');
      setPocketCounts(wishes);
    })();
  }, []);

  const getWish = async () => {
    try {
      const { data } = await api.get('main');
      setWroteWish(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HomeContainer>
      <HomeArticle>
        <div className='home-header'>
          <div>
            <div className='font-box'>
              <h2 className='header-color'>{pocketCounts.toLocaleString()}</h2>
              <h2>개의</h2>
            </div>
            <h2>소원이 달렸어요</h2>
          </div>
          <MenuButton />
        </div>
        <div className='home-body'>
          <div className='column wish-btn' onClick={() => setIsMakeWish(true)}>
            <img src={onePocket} />
            <img className='text' src={wishText} />
          </div>
          {wroteWish.map((wish, index) => {
            return (
              <div
                className='column'
                key={index}
                onClick={() => {
                  setWishId(wish._id);
                  setIsReadWish(true);
                }}
              >
                <img src={pocket} />
                <p className='wish-num'>{wish.likes}</p>
              </div>
            );
          })}
        </div>
        <div className='home-footer'>
          <TopKeyword />
          <Button>
            <BsArrowCounterclockwise size='1.4rem' />
            <button>다른 소원들 보기</button>
          </Button>
        </div>
      </HomeArticle>
      {isMakeWish && <MakeWishModal setIsMakeWish={setIsMakeWish} setIsCreatedModal={setIsCreatedModal} setIsLimitModal={setIsLimitModal} />}
      {isCreatedModal && <CreatedModal setIsCreatedModal={setIsCreatedModal} />}
      {isReadWish && <ReadWishModal id={wishId} setIsReadWish={setIsReadWish} />}
      {isLimitModal && <LimitModal isLimitModal={isLimitModal} setIsLimitModal={setIsLimitModal} />}
    </HomeContainer>
  );
};

const HomeArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0%;
  width: 90%;
  max-width: 440px;
  height: 720px;
  min-height: 590px;
  z-index: 10;
  padding: 3.5rem 0;
  background-color: inherit;
  ${HomeButtonFont};
  font-family: 'CWDangamAsac-Bold';
  color: ${contentFontColor};
  .home-header {
    display: flex;
    padding-left: 5%;
    justify-content: space-between;

    flex-direction: row;
    .font-box {
      display: flex;
      padding-bottom: 7px;
      .header-color {
        color: ${headercolor};
        margin-right: 6px;
      }
    }
    h2 {
      font-size: 2.3rem;
      color: ${contentFontColor};
    }
  }
  .home-body {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    .text {
      position: absolute;
      top: -1.5rem;
      left: 0.8rem;
    }
    .column {
      position: relative;
      text-align: center;
      margin: 0 auto;
      width: 30%;

      padding: 5px;
    }
    img {
      width: 75px;
      margin: 0.8rem 1rem;
    }

    .wish-btn {
      transform-origin: center;
      animation: ${bell} 2s infinite linear;
    }
    .wish-num {
      position: absolute;
      bottom: 28px;
      left: 70px;
      font-size: 1.4rem;
      color: ${redButton};
    }
  }
`;

export const Button = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 2px;
  margin: 0 auto;
  width: 80%;
  border-radius: 17px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;
  background-color: ${wishButton};
  color: #fff;
  button {
    padding: 1rem;
    outline: none;
    border: none;
    font-family: 'mainFont600';
    background-color: inherit;
    font-size: 1.3rem;
    color: #fff;
  }
`;

export default Home;

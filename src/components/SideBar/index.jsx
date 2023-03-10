import { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/makewish/wish-background.png';
import { blackcolor, mainFont600, mainFont900 } from '../../theme';
import onePocket from '../../assets/main/pockets/shadow.png';
import { useNavigate } from 'react-router-dom';
import { RxPerson } from 'react-icons/rx';
import { BsTelephone, BsChatLeftDots } from 'react-icons/bs';
const SideBar = ({ isSideBar, wishCheck }) => {
  const navigate = useNavigate();
  const [wishCounts, setWishCounts] = useState(0);
  useEffect(() => {
    if (wishCheck === 'Already created') setWishCounts(1);
    else setWishCounts(0);
  }, [wishCheck]);
  return (
    <SideBarContainer isSideBar={isSideBar}>
      <header>
        {wishCounts === 1 ? (
          <>
            <h1>오늘 소원 </h1>
            <h1>작성 완료 </h1>
          </>
        ) : (
          <>
            <h1>오늘 소원을</h1>
            <h1>작성해주세요 </h1>
          </>
        )}

        <h1 className='wishCounts'>{wishCounts}/1</h1>
      </header>
      <div className='side-body'>
        <div className='side-wish-view' onClick={() => navigate('/wish')}>
          <img src={onePocket} />
          <p>내가 빈 소원보기</p>
        </div>
        <div className='side-wish-view' onClick={() => navigate('/like')}>
          <img src={onePocket} />
          <p>내가 복 준 소원보기</p>
        </div>
        <DotLine />
        <div className='side-board'>
          <span>개발 중 . . .</span>
        </div>
        <DotLine />
      </div>
      <div className='side-bottom'>
        <div className='side-bottom-row' onClick={() => window.open('https://sustaining-library-e16.notion.site/3e91dc0823ed4ed3909e92b7fb60d515')}>
          <RxPerson className='side-icon' />
          <p>개발자 정보</p>
        </div>
        <div className='side-bottom-row' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScivna3ZuEh39GU16QNdTPr5jGYc4gcvcZZGoxix_gBEYBagw/viewform?usp=sf_link')}>
          <BsTelephone className='side-icon' />
          <p>문의하기</p>
        </div>
        <div className='side-bottom-row' onClick={() => window.open('https://sustaining-library-e16.notion.site/f99fe426e369406da40e0a38daa5618e')}>
          <BsChatLeftDots className='side-icon' />
          <p>자주 묻는 질문</p>
        </div>
      </div>
      <footer>
        <p>&copy; Copyright 2023. deokmani All rights reserved.</p>
      </footer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 70%;
  height: 100vh;
  max-height: 1100px;
  background-color: ${({ theme }) => theme.boxBgColor};
  background-repeat: no-repeat;
  z-index: 30;
  transform: translateX(${({ isSideBar }) => (isSideBar ? '-100%' : '0%')});
  transition: 0.4s ease;
  font-family: 'Pretendard';
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  header {
    margin-top: 1vh;
    width: 100%;
    font-size: 25px;

    h1 {
      margin: 6px 0;
      font-weight: 900;
    }

    .wishCounts {
      font-size: 30px;
    }
  }

  .side-body {
    margin-top: 25px;
    width: 100%;
    font-size: 17px;
    font-weight: 600;

    .side-wish-view {
      display: flex;
      align-items: center;
      margin: 15px 0;
      cursor: pointer;

      img {
        margin-right: 15px;
        width: 20px;
      }
    }

    .side-board {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      width: 100%;
      height: 20vh;
      background-color: white;
      border-radius: 15px;
    }
  }

  .side-bottom {
    margin-bottom: 25px;
    width: 100%;
    font-size: 17px;
    font-weight: 600;

    .side-icon {
      margin-right: 15px;
      font-size: 18px;
    }

    .side-bottom-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    font-size: 10px;
  }
`;

const DotLine = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  border-top: 3px dotted ${blackcolor};
  background-color: #fff;
  color: #fff;
`;

export default SideBar;

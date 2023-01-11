import { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/makewish/wish-background.png';
import { blackcolor, mainFont600 } from '../../theme';
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
        <h1>오늘 소원</h1>
        <h1>작성 완료</h1>
        <h1>{wishCounts}/1</h1>
      </header>
      <div className='side-body'>
        <div className='side-wish-view' onClick={() => navigate('/wish')}>
          <img src={onePocket} />
          <p>내가 작성한 소원보기</p>
        </div>
        <div className='side-wish-view' onClick={() => navigate('/like')}>
          <img src={onePocket} />
          <p>내가 응원한 소원보기</p>
        </div>
        <DotLine />
        <div className='side-board'></div>
        <DotLine />
      </div>
      <div className='side-bottom'>
        <div className='side-bottom-row'>
          <RxPerson className='side-icon' />
          <p>개발자 어쩌구 보기</p>
        </div>
        <div className='side-bottom-row'>
          <BsTelephone className='side-icon' />
          <p>문의하기</p>
        </div>
        <div className='side-bottom-row'>
          <BsChatLeftDots className='side-icon' />
          <p>자주 묻는 질문</p>
        </div>
      </div>
      <footer>
        <p>&copy; copyright.deokmani</p>
      </footer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  left: 100%;
  top: 0;
  width: 70%;
  height: 100vh;
  max-height: 1100px;
  padding: 20px;
  background: url(${background});
  background-repeat: no-repeat;
  z-index: 30;
  transform: translateX(${({ isSideBar }) => (isSideBar ? '-100%' : '0%')});
  transition: 0.4s ease;
  font-family: 'textFont1';
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  header {
    width: 100%;
    margin-top: 7vh;
    font-size: 25px;
    font-weight: 900;
    h1 {
      margin: 6px 0;
    }
  }
  .side-body {
    margin-top: 25px;
    width: 100%;
    font-size: 19px;
    .side-wish-view {
      margin: 15px 0;
      display: flex;
      align-items: center;
      img {
        width: 30px;
        margin-right: 10px;
      }
    }
    .side-board {
      margin: 20px 0;
      width: 100%;
      height: 20vh;
      background-color: white;
      border-radius: 15px;
    }
  }
  .side-bottom {
    margin-top: 10px;
    font-size: 24px;

    width: 100%;
    .side-icon {
      font-size: 28px;
      margin-right: 10px;
    }
    .side-bottom-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 0;
    }
  }
  footer {
    width: 100%;
  }
`;

const DotLine = styled.hr`
  border: none;
  border-top: 3px dotted ${blackcolor};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;

export default SideBar;

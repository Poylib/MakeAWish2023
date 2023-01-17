import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import pocket from '../../assets/main/pockets/shadow.png';

const NoWish = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (location.pathname === '/wish') {
      setMessage('작성한');
      setText('소원 빌러가기');
    } else if (location.pathname === '/like') {
      setMessage('복 준');
      setText('소원 복 주러 가기');
    }
  }, []);

  return (
    <NoWishContainer>
      <Notice>
        <div className='no-data'>
          <div className='img-box'>
            <img src={pocket} />
            <span>?</span>
          </div>

          <div className='message-wrapper'>
            {message} 소원이 아직 없어요
            <br />
            복주머니를 채워볼까요 ?
          </div>
        </div>
      </Notice>
      <Button
        text={text}
        color='main'
        onClick={() => {
          navigate('/home');
        }}
      />
    </NoWishContainer>
  );
};

const NoWishContainer = styled.div`
  margin: auto 0;

  button {
    padding: 20px;
    height: 3.5rem;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: none;
  }
`;

const Notice = styled.div`
  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20vh 0 5vh;

    .img-box {
      position: relative;

      img {
        width: 150px;
        height: auto;
        margin-bottom: 10vh;
      }

      span {
        position: absolute;
        top: 85px;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.8);
        font-size: 3rem;
      }
    }

    .message-wrapper {
      text-align: center;
      margin: 2rem 0;
      color: ${({ theme }) => theme.contentFontColor};
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1.3;
      letter-spacing: -0.8px;
    }
  }
`;

export default NoWish;

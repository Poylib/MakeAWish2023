import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import pocket from '../../assets/nodata/empty-pocket.png';

const NoWish = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (location.pathname === '/wish') {
      setMessage('작성한');
      setText('소원 작성하러 가기');
    } else if (location.pathname === '/like') {
      setMessage('응원한');
      setText('소원 응원하러 가기');
    }
  }, []);

  return (
    <NoWishContainer>
      <div className='no-data'>
        <img src={pocket} />
        <div className='message-wrapper'>
          {message} 소원이 없어요..
          <br />
          복주머니를 채워볼까요?
        </div>
        <Button
          text={text}
          color='main'
          onClick={() => {
            navigate('/home');
          }}
        />
      </div>
    </NoWishContainer>
  );
};

const NoWishContainer = styled.div`
  width: auto;
  margin-top: 1.5rem;
  padding: 3rem 1.5rem;

  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 250px;
      height: auto;
    }

    .message-wrapper {
      margin: 2rem 0;

      ${({ theme }) => theme.textFont1}
      font-family: 'UhBeeSeulvely';
      font-size: 1.75rem;
      line-height: 1.5;
    }
  }
`;

export default NoWish;

import styled from 'styled-components';
import Button from '../Button';
import pocket from '../../assets/nodata/empty-pocket.png';

const NoWish = () => {
  const message = '응원한';
  const text = '소원 작성하기';

  return (
    <NoWishContainer>
      <div className='no-data'>
        <img src={pocket} />
        <div className='message-wrapper'>
          {message} 소원이 없어요..
          <br />
          복주머니를 채워볼까요?
        </div>
        <Button text={text} color='main' />
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

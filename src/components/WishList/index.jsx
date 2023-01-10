import { useState } from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';

const WishList = () => {
  const [isLike, setIsLike] = useState(false);

  console.log(isLike);

  return (
    <WishListContainer>
      <div className='title-wrapper'>
        <FiArrowLeft />
        <h3>내가 빈 소원</h3>
      </div>
      <div className='list-wrapper'>
        <div className='wish'>
          <div className='text'>2023년 계묘년에는 여자친구도 생기고 좋은 직장에 취업도 해서 얼른 결혼하고 싶다! 그리고 서비스 대박나서 떼돈 벌고 싶ㄴ다</div>
          <div className='like-wrapper'>
            <p className={isLike ? 'bok' : 'bok-off'}>100</p>
            <img
              alt='복'
              src={isLike ? luckOn : luckOff}
              onClick={() => {
                setIsLike(!isLike);
              }}
            />
          </div>
        </div>
      </div>
    </WishListContainer>
  );
};

const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  vertical-align: middle;
  max-width: 390px;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  padding: 1.25rem;

  div + div {
    margin-top: 1.5rem;
  }

  .title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2.5rem;

    h3 {
      ${({ theme }) => theme.HomeButtonFont};
      font-family: 'CWDangamAsac-Bold';
    }
  }

  .wish {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 20rem;
    padding: 1.5rem;
    background: #fff;
    border-radius: 30px;

    .text {
      color: ${({ theme }) => theme.contentFontColor};
      line-height: 2;
      font-family: 'UhBeeRice';
      font-size: 1.25rem;
      ${({ theme }) => theme.textFont2};
    }

    .like-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;

      img {
        width: 70px;
      }

      p {
        margin-right: 5px;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .bok {
        color: #cc3333;
      }

      .bok-off {
        color: #9e9e9e;
      }
    }
  }
`;

export default WishList;

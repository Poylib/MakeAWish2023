import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { FiArrowLeft } from 'react-icons/fi';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';

const WishList = ({ title, icon, wishList }) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);

  return (
    <WishListContainer>
      <div className='title-wrapper'>
        <FiArrowLeft
          onClick={() => {
            navigate('/home');
          }}
        />
        <h3>
          {title}&nbsp;{icon}
        </h3>
      </div>
      {location.pathname === '/keyword' && (
        <div className='keyword-wrapper'>
          <div className='prev-keyword'>#건강</div>
          <TiArrowLeftThick />
          <div className='keyword'>#돈</div>
          <TiArrowRightThick />
          <div className='next-keyword'>#행복</div>
        </div>
      )}
      <div className='list-wrapper'>
        {wishList.map(wish => {
          return (
            <Wish key={wish._id}>
              <div className='name'>{wish.nickName}</div>
              <div className='wish'>
                <div className='text'>{wish.comment}</div>
                <div className='like-wrapper'>
                  <p className={isLike ? 'bok' : 'bok-off'}>{wish.likes}</p>
                  <img
                    alt='복'
                    src={isLike ? luckOn : luckOff}
                    onClick={() => {
                      setIsLike(!isLike);
                    }}
                  />
                </div>
              </div>
            </Wish>
          );
        })}
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

  .title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2.5rem;

    h3 {
      display: flex;
      justify-content: center;
      ${({ theme }) => theme.HomeButtonFont};
      font-family: 'CWDangamAsac-Bold';
    }
  }

  .keyword-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5rem;

    ${({ theme }) => theme.textFont1};
    font-family: 'UhBeeSeulvely';
    font-size: 1.75rem;

    svg {
      color: #9e9e9e;
    }

    .prev-keyword {
      color: #9e9e9e;
    }

    .next-keyword {
      color: #9e9e9e;
    }
  }
`;

const Wish = styled.div`
  margin-top: 1.5rem;

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

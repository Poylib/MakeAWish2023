import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import styled from 'styled-components';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { FiArrowLeft } from 'react-icons/fi';
import NoWish from '../NoWish';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';

const WishList = ({
  //
  title,
  icon,
  wishList,
  setWishList,
  keyword,
  loader,
  isNoWish,
  page,
  setPage,
}) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const [lastLi, setLastLi] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && entry.isIntersecting) {
          observer.disconnect();
          setPage(page + 1);
        }
      });
    });
    lastLi && observer.observe(lastLi);
  }, [lastLi]);
  const handleLike = async (id, isLike, listArr) => {
    const body = {
      id,
      uuid: localStorage.getItem('uuid'),
      like: isLike,
    };
    try {
      await api.post('like', body);
      setWishList([...listArr]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WishListContainer>
      <div className='title-wrapper'>
        <FiArrowLeft
          onClick={() => {
            navigate('/home');
          }}
        />
        <h3>
          {title}
          {location.pathname === '/wish' && <img src={icon} />}
        </h3>
      </div>
      {location.pathname === '/keyword' && (
        <div className='keyword-wrapper'>
          <div className='prev-keyword'>#건강</div>
          <TiArrowLeftThick />
          <div className='keyword'>#{keyword}</div>
          <TiArrowRightThick />
          <div className='next-keyword'>#행복</div>
        </div>
      )}
      {wishList && !isNoWish && (
        <>
          {wishList.map((wish, index) => {
            let listArr = wishList;
            return (
              <Wish key={wish._id} ref={wishList.length - 1 === index ? setLastLi : null}>
                {location.pathname === '/like' && <span className='name'>{wish.nickName}</span>}
                <div className='wish'>
                  <div className='text'>{wish.comment}</div>
                  <div className='like-wrapper'>
                    <p className={wish.isLike ? 'bok' : 'bok-off'}>{wish.likes}</p>
                    <img
                      alt='복'
                      src={wish.isLike ? luckOn : luckOff}
                      onClick={() => {
                        if (wish.isLike) {
                          listArr[index].isLike = false;
                          listArr[index].likes -= 1;
                          handleLike(wish._id, false, listArr);
                        } else {
                          listArr[index].isLike = true;
                          listArr[index].likes += 1;
                          handleLike(wish._id, true, listArr);
                        }
                      }}
                    />
                  </div>
                </div>
              </Wish>
            );
          })}
        </>
      )}
      {isNoWish && <NoWish />}
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

      img {
        width: 40px;
        margin-left: 10px;
      }
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

  .name {
    width: auto;
    padding: 0 10px;
    background: #cc3333;
    color: #fff;
    ${({ theme }) => theme.textFont2};
    font-family: 'UhBeeRice';
    font-size: 1.25rem;
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
      ${({ theme }) => theme.textFont2};
      line-height: 2;
      font-family: 'UhBeeRice';
      font-size: 1.25rem;
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

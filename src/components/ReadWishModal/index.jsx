import { useState, useEffect } from 'react';
import { api } from '../../api';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import ToastAlert from '../ToastAlert';
import MultiButton from '../MultiButton';
import bg from '../../assets/readwish/bg.png';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';
import { mainColor } from '../../theme';

const ReadWishModal = ({ id, setIsReadWish, otherWish, wroteWish, setWroteWish }) => {
  const [wish, setWish] = useState();
  const [wishRenderId, setWishRenderId] = useState(id);
  const [wishListCount, setWishListCount] = useState(0);
  const uuid = localStorage.getItem('uuid');
  let changeLike = wroteWish;

  useEffect(() => {
    if (uuid) loader();
    else {
      if (confirm('잘못된 접근입니다. 새로고침 후 다시 시도해주세요')) location.reload();
    }
  }, [wishListCount]);

  const loader = async () => {
    try {
      const { data } = await api.get(`wishes?id=${wishRenderId}&uuid=${uuid}`);
      setWish(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async isLike => {
    const id = wishRenderId;
    const body = {
      id,
      uuid,
      like: isLike,
    };
    changeLike.map(el => {
      if (el._id === id) {
        if (isLike) el.likes++;
        else el.likes--;
      }
    });
    try {
      await api.post('like', body);
      await loader();
    } catch (error) {
      console.log(error);
    }
  };

  const nextWish = () => {
    if (wishListCount !== otherWish.length) {
      setWishRenderId(otherWish[wishListCount]._id);
      setWishListCount(wishListCount + 1);
    } else toast('새로운 소원을 불러와주세요!');
  };

  return (
    wish && (
      <>
        <ToastAlert />
        <Positioner>
          <Background alt='background' src={bg} />
          <ReadWishModalContainer>
            <div className='user-wrapper'>
              <span className='user-name'>{wish.nickName}</span>
              <span className='user-wish'>님의 소원</span>
            </div>
            <div className='wish-wrapper'>
              <div className='wish'>
                <textarea className='text' value={wish.comment} readOnly />
                <div className='luck-wrapper'>
                  <div className='luck'>
                    <span className='user'>{wish.nickName}</span> 님의 소원에 복 보내기
                  </div>
                  <div className='image-wrapper'>
                    <img
                      alt='복'
                      src={wish.isLike ? luckOn : luckOff}
                      className='bok'
                      onClick={() => {
                        if (wish.isLike === false) {
                          handleLike(true);
                        } else if (wish.isLike === true) {
                          handleLike(false);
                        }
                      }}
                    />
                    <span className='count'>
                      <FiX />
                      <span className='count-number'>{wish.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='button-wrapper'>
              <MultiButton
                onClose={() => {
                  setIsReadWish(false);
                  setWroteWish(changeLike);
                }}
                onConfirm={nextWish}
                closeText='닫기'
                confirmText='다음'
              />
            </div>
          </ReadWishModalContainer>
        </Positioner>
      </>
    )
  );
};

const Positioner = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
`;

const Background = styled.img`
  position: relative;
  width: 100%;
  height: 100%;

  min-width: 1200px;
  max-width: 2000px;
  object-fit: cover;
`;

const ReadWishModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  max-width: 390px;
  min-height: 660px;
  padding: 1.5rem;

  .user-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    padding-bottom: 40px;
    font-size: 1.5rem;
    font-weight: 600;

    .user-name {
      margin-right: 0.5rem;
      color: ${mainColor};
      @media screen and (min-width: 1500px) {
        padding-bottom: 70px;
      }
    }

    .user-wish {
      color: #fff;
      @media screen and (min-width: 1500px) {
        padding-bottom: 70px;
      }
    }
  }

  .wish-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    min-height: 340px;
    margin-top: 1.5rem;

    .wish {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: #fff;
      border: none;
      border-radius: 15px;

      .text {
        height: 100%;
        min-height: 10rem;
        border: none;
        outline: none;
        resize: none;
        ${({ theme }) => theme.textFont2};
        color: ${({ theme }) => theme.contentFontColor};
        font-family: 'UhBeeRice';
        font-size: 1.25rem;
        line-height: 2;
        overflow: auto;
      }

      .text::-webkit-scrollbar {
        width: 5px;
      }

      .text::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.mainColor};
        border-radius: 10px;
      }

      .text::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.bgColor};
      }

      .luck-wrapper {
        padding: 1rem;

        .luck {
          padding: 0.4rem;
          background: ${({ theme }) => theme.boxBgColor};
          border-radius: 15px;
          color: ${({ theme }) => theme.mainColor};
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }

        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          .bok {
            width: 70px;
          }

          .count {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;

            color: ${({ theme }) => theme.mainColor};
            font-size: 2rem;
            font-weight: 600;

            .count-number {
              text-align: left;
              width: 30px;
            }
          }
        }

        div + div {
          margin-top: 1rem;
        }
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default ReadWishModal;

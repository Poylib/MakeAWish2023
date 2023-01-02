import { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import MultiButton from '../MultiButton';
import bg from '../../assets/readwish/bg.png';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';
import { mainColor } from '../../theme';

const ReadWishModal = ({ setIsReadWish }) => {
  const name = '전챠밍';
  const text =
    '2023년 계묘년에는 여자친구도 생기고 좋은 직장에 취업도 해서 얼른 결혼하고 싶다! 떼 돈 벌어서 팀원들한테 다 나눠주고 싶다! 2023년 계묘년에는 여자친구도 생기고 좋은 직장에 취업도 해서 얼른 결혼하고 싶다! 떼 돈 벌어서 팀원들한테 다 나눠주고 싶다!';

  const [count, setCount] = useState(200000);
  const [isLuck, setIsLuck] = useState(false);

  return (
    <Positioner>
      <Background alt='background' src={bg} />
      <ReadWishModalContainer>
        <div className='user-wrapper'>
          <span className='user-name'>{name}</span>
          <span className='user-wish'>님의 소원</span>
        </div>
        <div className='wish-wrapper'>
          <div className='wish'>
            <textarea className='text' value={text} readOnly />
            <div className='luck-wrapper'>
              <div className='luck'>
                <span className='user'>{name}</span> 님의 소원에 복 보내기
              </div>
              <div className='image-wrapper'>
                <img
                  alt='복'
                  src={isLuck ? luckOn : luckOff}
                  className='bok'
                  onClick={() => {
                    if (isLuck === false) {
                      setIsLuck(true);
                      setCount(count + 1);
                    } else {
                      setIsLuck(false);
                      setCount(count - 1);
                    }
                  }}
                />
                <span className='count'>
                  <FiX />
                  {count}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='button-wrapper'>
          <MultiButton
            onClose={() => {
              setIsReadWish(false);
            }}
            onConfirm={() => {}}
            closeText='닫기'
            confirmText='다음'
          />
        </div>
      </ReadWishModalContainer>
    </Positioner>
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
    }

    .user-wish {
      color: #fff;
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

    .count {
    }

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
      }

      .text::-webkit-scrollbar {
        width: 5px;
      }

      .text::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.mainColor};
      }

      .text::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.bgColor};
      }

      .luck-wrapper {
        padding: 1rem;

        .luck {
          padding: 0.25rem;
          background: ${({ theme }) => theme.bgColor};
          border-radius: 15px;
          color: ${({ theme }) => theme.mainColor};
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }

        .image-wrapper {
          display: flex;
          justify-content: center;

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

            svg {
              padding-bottom: 0.3rem;
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

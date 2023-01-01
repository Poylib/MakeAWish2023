import { useState } from 'react';
import styled from 'styled-components';
import MultiButton from '../MultiButton';
import bg from '../../assets/readwish/bg.png';
import luckOn from '../../assets/readwish/bok-on.png';
import luckOff from '../../assets/readwish/bok-off.png';
import { mainColor } from '../../theme';

const ReadWishModal = ({ setIsReadWish }) => {
  const name = 'dd';
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
            <div className='text'>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</div>
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
                    setIsLuck(!isLuck);
                  }}
                />
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
  justify-content: space-around;
  width: 100%;
  height: 100%;

  max-width: 390px;
  padding: 1.5rem;

  .user-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    padding-bottom: 1rem;
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
    justify-content: center;
    align-items: center;

    .wish {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 5rem;
      padding: 1rem;
      background: #fff;
      border: none;
      border-radius: 15px;

      .text {
        min-height: 10rem;
        ${({ theme }) => theme.textFont2};
        color: ${({ theme }) => theme.contentFontColor};
        font-family: 'UhBeeRice';
        font-size: 1.3rem;
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

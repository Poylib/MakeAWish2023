import { useState } from 'react';
import styled from 'styled-components';
import { TiWarningOutline } from 'react-icons/ti';
import MultiButton from '../MultiButton';
import background from '../../assets/wish/wish-background.png';
import moon from '../../assets/wish/wish-moon.png';

const WishModal = ({ setIsWishModal, setIsCreatedModal }) => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };

  const handleWish = e => {
    setWish(e.target.value);
  };

  return (
    <>
      <Positioner>
        <WishModalContainer>
          <div className='content-wrapper'>
            <div className='contents'>
              <input maxLength={8} placeholder='이름 또는 닉네임 (8글자 이하)' onChange={handleName} value={name} />
              <textarea maxLength={200} placeholder='소원을 작성해주세요!' onChange={handleWish} value={wish} />
              <span>{wish.length} / 200</span>
              <div className='image-wrapper'>
                <img src={moon} alt='moon' />
              </div>
            </div>
          </div>
          <div className='bottom-wrapper'>
            <div className='contents'>
              <div className='warning'>
                <TiWarningOutline className='icon' />
                <span>소원은 하루 한 개만 작성할 수 있습니다. 작성한 소원은 수정 및 삭제를 할 수 없으니 신중하게 작성해주세요.</span>
              </div>
              <div className='button-wrapper'>
                <MultiButton
                  onClose={() => {
                    setIsWishModal(false);
                  }}
                  onConfirm={() => {
                    setIsWishModal(false);
                    setIsCreatedModal(true);
                  }}
                  closeText='닫기'
                  confirmText='작성완료'
                />
              </div>
            </div>
          </div>
        </WishModalContainer>
      </Positioner>
    </>
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
`;

const WishModalContainer = styled.div`
  width: 100%;
  height: 100%;

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 1.25rem;
    background: url(${background});

    .contents {
      padding: 1.5rem;
      width: 390px;

      input {
        width: 100%;
        margin: 0.5rem 0;
        padding: 0 0.25rem;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.mainColor};
        font-family: 'UhBeeSeulvely';
        font-size: 1.5rem;
        outline: none;

        ${({ theme }) => theme.textFont1};
      }

      textarea {
        width: 100%;
        height: 20rem;
        margin: 0.5rem 0;
        padding: 0.75rem;
        background: #fff;
        border: none;
        border-radius: 15px;
        color: ${({ theme }) => theme.contentFontColor};
        font-family: 'UhBeeRice';
        font-size: 1.3rem;
        outline: none;
        overflow: hidden;
        resize: none;

        ${({ theme }) => theme.textFont2};
      }

      span {
        display: block;
        color: #787878;
        transform: translate(80%, -220%);
      }

      .image-wrapper {
        display: flex;
        justify-content: center;

        img {
          width: 100%;
          transform: translate(0, -60%);
        }
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20%;
    background: rgba(0, 0, 0, 0.85);

    .contents {
      width: 390px;

      .warning {
        display: flex;
        justify-content: center;
        padding: 10px 10px 15px 10px;
        color: #fff;
        font-weight: 300;

        .icon {
          margin-right: 5px;
          font-size: 0.75rem;
        }

        span {
          width: 90%;
          line-height: 0.75rem;
          letter-spacing: 0.01rem;
          font-size: 0.7rem;
        }
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

export default WishModal;

import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../api';
import styled from 'styled-components';
import { TiWarningOutline } from 'react-icons/ti';
import ToastAlert from '../ToastAlert';
import MultiButton from '../MultiButton';
import background from '../../assets/makewish/wish-background.png';
import moon from '../../assets/makewish/wish-moon.png';

const MakeWishModal = ({ setIsMakeWish, setIsCreatedModal, getWish, setIsLimitModal }) => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const wishLength = `${wish.length}`;

  const makeWish = async () => {
    const body = {
      uuid: localStorage.getItem('uuid'),
      nickName: name,
      comment: wish,
    };
    try {
      await api.post('/wishes', body);
      setIsMakeWish(false);
      setIsCreatedModal(true);
      getWish();
    } catch (error) {
      console.log(error);
      const message = error.response.data;
      if (message === 'Already created') {
        setIsMakeWish(false);
        setIsLimitModal(true);
      } else if (message === '비속어는 사용 금지입니다.') {
        toast(message);
      } else if (message === '특수문자 제외 한글 또는 영문 숫자를 포함한 8글자 이내여야 합니다.' || '200글자 이하로 작성해주십시오') {
        toast('작성란을 확인해주세요.');
      }
    }
  };

  const handleName = e => {
    const nameCurrent = e.target.value;
    setName(nameCurrent);
  };

  const handleWish = e => {
    const wishCurrent = e.target.value;
    setWish(wishCurrent);
  };

  return (
    <>
      <ToastAlert />
      <Positioner>
        <WishModalContainer>
          <div className='content-wrapper'>
            <div className='contents'>
              <input maxLength={8} placeholder='이름 또는 닉네임 (8글자 이하)' onChange={handleName} value={name} />
              <div className='text'>
                <textarea maxLength={200} placeholder='소원을 작성해주세요!' onChange={handleWish} value={wish} />
                <span>{wishLength.padStart(3, '0')} / 200</span>
              </div>
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
                    setIsMakeWish(false);
                  }}
                  onConfirm={() => {
                    makeWish();
                  }}
                  closeText='닫기'
                  confirmText='작성 완료'
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
  min-height: 667px;

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
      width: 390px;
      padding: 1.5rem;

      input {
        width: 100%;
        margin: 1rem 0;
        padding: 0 0.25rem;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.mainColor};
        font-family: 'UhBeeSeulvely';
        font-size: 1.5rem;
        outline: none;

        ${({ theme }) => theme.textFont1};
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 45vh;
        margin: 0.5rem 0;
        padding: 0.75rem 1rem;
        background: #fff;
        border: none;
        border-radius: 15px;

        textarea {
          width: 100%;
          min-height: 15rem;
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          overflow: auto;
          resize: none;
          word-break: break-all;
          color: ${({ theme }) => theme.contentFontColor};
          font-family: 'UhBeeRice';
          font-size: 1.3rem;

          ${({ theme }) => theme.textFont2};
        }

        textarea::-webkit-scrollbar {
          width: 5px;
        }

        textarea::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.mainColor};
          border-radius: 10px;
        }

        textarea::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.bgColor};
        }
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

      span {
        display: flex;
        justify-content: flex-end;
        color: #787878;
      }

      .image-wrapper {
        display: flex;
        justify-content: center;

        img {
          width: 95%;
          transform: translate(0, -60%);
        }
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    justify-content: center;
    height: 20%;
    background: rgba(0, 0, 0, 0.85);

    .contents {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 390px;
      height: 100%;

      .warning {
        display: flex;
        justify-content: center;
        padding: 0 10px;
        color: #fff;
        font-weight: 300;

        .icon {
          margin-right: 5px;
          font-size: 1rem;
        }

        span {
          width: 90%;
          line-height: 1rem;
          letter-spacing: 0.01rem;
          font-size: 0.75rem;
        }
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        padding: 0 1.25rem;
      }
    }
  }
`;

export default MakeWishModal;

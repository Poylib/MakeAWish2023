import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dumpling from '../../assets/main/limitModal/만두 글씨.png';
import { headercolor, blackcolor } from '../../theme';

const LimitModal = ({ isLimitModal, setIsLimitModal }) => {
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);
  useEffect(() => {
    notify();
  }, [isLimitModal]);
  const handleClose = () => {
    setIsLimitModal(false);
  };

  const notify = () => {
    toast('앗! 복주머니가 아니라 만두?');
  };

  return (
    <Overlay>
      <ToastContainer position='top-center' autoClose={1500} hideProgressBar newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme='light' />
      <ModalWrap>
        <Contents>
          <img className='dumpling' src={dumpling} />
          <button onClick={handleClose}>닫기</button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;

  .Toastify__toast-container {
    display: flex;
    justify-content: center;
    width: 270px;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);

    .Toastify__toast {
      border-radius: 50px;
      background-color: #f4f2f2a9;
      opacity: 0.8;

      .Toastify__close-button--light > svg {
        width: 0;
        height: 0;
      }

      .Toastify__toast-body {
        margin: 5px 10px;
        padding: 0 6px;
        font-weight: 600;
        font-size: 18px;
        color: white;
      }
    }
  }
`;

const ModalWrap = styled.div`
  width: 330px;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 20px;
    width: 330px;
  }

  button {
    width: 150px;
    margin: 35px 0;
    padding: 15px 20px;
    color: white;
    background-color: ${headercolor};
    font-weight: 600;
    font-size: 20px;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export default LimitModal;

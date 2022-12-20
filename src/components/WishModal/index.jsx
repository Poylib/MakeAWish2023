import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

const WishModal = ({ isWishModal, setIsWishModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutside = e => {
      if (isWishModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsWishModal(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [setIsWishModal]);

  return (
    <>
      <Background />
      <Positioner>
        <WishModalContainer ref={modalRef}>
          <div className='modal-header'>
            <IoMdClose
              onClick={() => {
                setIsWishModal(false);
              }}
            />
          </div>
          <div className='image-wrapper'>
            <img alt='rabbit' src='https://velog.velcdn.com/images/daydreamplace/post/56743fb6-20ac-4044-a957-7eb9bfb0fca9/image.png' />
          </div>
          <div className='text-wrapper'>
            <label>닉네임</label>
            <input placeholder='닉네임을 적어주세요!' />
            <label>소원</label>
            <textarea placeholder='소원을 작성해주세요!' />
          </div>
          <div className='button-wrapper'>
            <Button
              text='소원빌기'
              onClick={() => {
                setIsWishModal(false);
              }}
            />
          </div>
        </WishModalContainer>
      </Positioner>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);
  z-index: 10;
`;

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
  z-index: 20;
`;

const WishModalContainer = styled.div`
  width: 25rem;
  border-radius: 4px;
  background: bisque;
  padding: 1.25rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;

  .modal-header {
    display: flex;
    justify-content: flex-end;

    svg {
      font-size: 1.5rem;
      color: tomato;

      :hover {
        cursor: pointer;
      }
    }
  }

  .image-wrapper {
    display: flex;
    justify-content: center;

    img {
      width: 50%;
    }
  }

  .text-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;

    label {
      color: tomato;
      font-weight: 700;
    }

    input {
      margin: 0.5rem 0;
      padding: 0.5rem 0.75rem;
      border: 2px solid transparent;
      border-image: linear-gradient(to right, tomato, yellow, tomato, yellow, tomato);
      border-image-slice: 1;
      font-size: 1rem;
      outline: none;
    }

    textarea {
      width: 100%;
      height: 13rem;
      margin: 0.5rem 0;
      padding: 0.75rem;
      background: #fff;
      border: 2px solid transparent;
      border-image: linear-gradient(to right, tomato, yellow, tomato, yellow, tomato);
      border-image-slice: 1;
      font-size: 1rem;
      outline: none;
      overflow: hidden;
      resize: none;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  div + div {
    margin-top: 1rem;
  }
`;

export default WishModal;

import { useRef, useEffect } from 'react';
import styled from 'styled-components';
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
          <div className='text-wrapper'>
            <input placeholder='이름 또는 닉네임 (8글자 이하)' />
            <textarea maxLength={200} placeholder='소원을 작성해주세요!' />
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
  background: rgba(0, 0, 0, 0.85);
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
  background: url('https://velog.velcdn.com/images/daydreamplace/post/f2eb89c6-f025-4099-8a2d-c74bf8652874/image.png');
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
      border: none;
      background: transparent;
      font-size: 1rem;
      outline: none;
    }

    textarea {
      width: 100%;
      height: 13rem;
      margin: 0.5rem 0;
      padding: 0.75rem;
      background: #fff;
      border: none;
      border-radius: 15px;

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

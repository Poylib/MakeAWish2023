import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const WishModal = ({ isWishModal, setIsWishModal }) => {
  const modalRef = useRef();
  const [wish, setWish] = useState('');

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

  const handleWish = e => {
    setWish(e.target.value);
  };

  return (
    <>
      <Background />
      <Positioner>
        <WishModalContainer ref={modalRef}>
          <div className='text-wrapper'>
            <input placeholder='이름 또는 닉네임 (8글자 이하)' />
            <textarea maxLength={200} placeholder='소원을 작성해주세요!' onChange={handleWish} value={wish} />
            <span>{wish.length}/200</span>
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
  background: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acbd91bc-1ce5-41e9-b291-734df6942d72/%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T091032Z&X-Amz-Expires=86400&X-Amz-Signature=ad24c4f951c3ae59509afd671c13ad66f2e88e25eac52c229b2403ba16fac464&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2586%25E1%2585%25A1%25E1%2586%25AB.png%22&x-id=GetObject');
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

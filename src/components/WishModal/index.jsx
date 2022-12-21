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
          <div className='content-wrapper'>
            <input placeholder='이름 또는 닉네임 (8글자 이하)' />
            <textarea maxLength={200} placeholder='소원을 작성해주세요!' onChange={handleWish} value={wish} />
            <span>{wish.length}/200</span>
            <div className='image-wrapper'>
              <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fbdc7f7f-5e7d-483b-8c84-27623c81c508/%E1%84%83%E1%85%A1%E1%86%AF_%28%E1%84%8B%E1%85%A7%E1%84%87%E1%85%A2%E1%86%A8_%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%80%E1%85%A6%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T091023Z&X-Amz-Expires=86400&X-Amz-Signature=83c8848f6281839b95ac2dc70233135a58078ae078b6977396d944f5f749e9f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%2520%28%25E1%2584%258B%25E1%2585%25A7%25E1%2584%2587%25E1%2585%25A2%25E1%2586%25A8%2520%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25A8%25E1%2584%2580%25E1%2585%25A6%29.png%22&x-id=GetObject' />
            </div>
          </div>
          <div className='bottom-wrapper'>
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
  width: 100%;
  height: 100%;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;

  .content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 1.25rem;
    background: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acbd91bc-1ce5-41e9-b291-734df6942d72/%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T091032Z&X-Amz-Expires=86400&X-Amz-Signature=ad24c4f951c3ae59509afd671c13ad66f2e88e25eac52c229b2403ba16fac464&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2586%25E1%2585%25A1%25E1%2586%25AB.png%22&x-id=GetObject');

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
      height: 20rem;
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

    span {
      color: #787878;
    }

    .image-wrapper {
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        transform: translate(0, -50%);
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    justify-content: center;
  }

  div + div {
    margin-top: 1rem;
  }
`;

export default WishModal;

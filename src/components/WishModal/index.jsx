import { useState } from 'react';
import styled from 'styled-components';
import { TiWarningOutline } from 'react-icons/ti';
import MultiButton from '../MultiButton';

const WishModal = ({ setIsWishModal }) => {
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
                <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fbdc7f7f-5e7d-483b-8c84-27623c81c508/%E1%84%83%E1%85%A1%E1%86%AF_%28%E1%84%8B%E1%85%A7%E1%84%87%E1%85%A2%E1%86%A8_%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%80%E1%85%A6%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T091023Z&X-Amz-Expires=86400&X-Amz-Signature=83c8848f6281839b95ac2dc70233135a58078ae078b6977396d944f5f749e9f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%2520%28%25E1%2584%258B%25E1%2585%25A7%25E1%2584%2587%25E1%2585%25A2%25E1%2586%25A8%2520%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25A8%25E1%2584%2580%25E1%2585%25A6%29.png%22&x-id=GetObject' />
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
  z-index: 20;
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
    background: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acbd91bc-1ce5-41e9-b291-734df6942d72/%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T091032Z&X-Amz-Expires=86400&X-Amz-Signature=ad24c4f951c3ae59509afd671c13ad66f2e88e25eac52c229b2403ba16fac464&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2586%25E1%2585%25A1%25E1%2586%25AB.png%22&x-id=GetObject');

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
        transform: translate(82%, -220%);
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

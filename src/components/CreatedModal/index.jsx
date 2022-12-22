import styled from 'styled-components';
import Button from '../Button';
import stamp from '../../assets/tokki-stamp.png';
import { mainFont700 } from '../../theme';

const CreatedModal = ({ setIsCreatedModal }) => {
  return (
    <>
      <Background />
      <Positioner>
        <CreatedModalContainer>
          <div className='content-wrapper'>
            <p>
              달토끼한테 <br />
              소원 접수 완료
            </p>
            <img alt='tokki-stamp' src={stamp} />
          </div>
          <div className='bottom-wrapper'>
            <Button color='main' text='내가 빈 소원 모두 보기' />
            <Button
              color='transparent'
              onClick={() => {
                setIsCreatedModal(false);
              }}
              text='메인으로 돌아가기'
            />
          </div>
        </CreatedModalContainer>
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
  z-index: 100;
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
  z-index: 200;
`;

const CreatedModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 50px 30px;
    background: #fff;
    border-radius: 15px;

    p {
      ${mainFont700};
      margin-bottom: 1.5rem;
      font-family: 'Pretendard';
      font-size: 1.75rem;
      font-weight: 900;
      text-align: center;

      :hover {
        cursor: default;
      }
    }

    img {
      width: 70%;

      animation-name: stamp;
      animation-duration: 2s;
      animation-iteration-count: 100;
    }

    @keyframes stamp {
      0% {
        transform: scale(1);
      }

      5% {
        transform: scale(1.2);
      }

      10% {
        transform: scale(1);
        opacity: 0;
      }

      15% {
        transform: scale(1.1);
      }

      20% {
        transform: scale(1);
      }

      25% {
        transform: scale(1.2);
      }

      35% {
        transform: scale(1.1);
      }

      50% {
        transform: scale(1.1);
      }

      70% {
        transform: scale(1);
      }

      75% {
        transform: scale(1.2);
      }

      80% {
        transform: scale(1.1);
      }

      90% {
        transform: scale(1);
      }

      95% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    button {
      height: 3.5rem;
    }

    button + button {
      margin-top: 5px;
    }
  }
`;

export default CreatedModal;

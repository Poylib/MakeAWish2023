import styled from 'styled-components';
import Button from '../Button';

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
  height: auto;

  .content-wrapper {
    width: 100%;
    padding: 30px;
    background: #fff;
    border-radius: 15px;

    p {
      font-size: 1.75rem;
      text-align: center;

      :hover {
        cursor: default;
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    button {
      height: 3rem;
    }

    button + button {
      margin-top: 5px;
    }
  }
`;

export default CreatedModal;

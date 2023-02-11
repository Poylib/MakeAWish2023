import { api } from '../../api';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import Button from '../Button';

const CoachMark = () => {
  const getUuid = async () => {
    try {
      const { data } = await api.get('id');
      localStorage.setItem('uuid', data.uuid);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <CoachMarkContainer>
        <div className='mark-wrapper'>coach mark</div>
        <Button color='main' text='확인했어요' icon={<GiCheckMark />} onClick={getUuid} />
      </CoachMarkContainer>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;

  display: flex;
  justify-content: center;
`;

const CoachMarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 100%;
  min-height: 660px;
  padding: 1.5rem;
  color: #fff;

  .mark-wrapper {
    height: 80vh;
  }

  button {
    height: 50px;
    font-size: 1.5rem;
  }
`;

export default CoachMark;

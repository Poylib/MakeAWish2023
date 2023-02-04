import styled from 'styled-components';
import Button from '../Button';

const CoachMark = () => {
  return (
    <Background>
      <CoachMarkContainer>
        <div>coach mark</div>
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
  width: 390px;

  div {
    color: #fff;
  }
`;

export default CoachMark;

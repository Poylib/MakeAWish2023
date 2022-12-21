import styled from 'styled-components';

const CreatedModal = () => {
  return (
    <>
      <Background />
      <Positioner>
        <CreatedModalContainer>
          <div></div>
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

const CreatedModalContainer = styled.div``;

export default CreatedModal;

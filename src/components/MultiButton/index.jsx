import styled from 'styled-components';

const MultiButton = ({ onClose, onConfirm, closeText, confirmText, disabled }) => {
  return (
    <MultuButtonContainer>
      <button className='close-button' onClick={onClose}>
        {closeText}
      </button>
      <div className='border' />
      <button className='confirm-button' onClick={onConfirm} disabled={disabled}>
        {confirmText}
      </button>
    </MultuButtonContainer>
  );
};

const MultuButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;

  outline: none;
  border: none;
  border-radius: 17px;
  background: ${({ theme }) => theme.mainColor};
  color: #fff;

  .border {
    width: 1px;
    height: 1.5rem;
    background: #fff;
  }

  button {
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .close-button {
    width: 30%;
    padding: 1rem;

    :hover {
      cursor: pointer;
    }
  }

  .confirm-button {
    width: 70%;
    padding: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`;

export default MultiButton;

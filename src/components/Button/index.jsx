import styled from 'styled-components';

const Button = ({ onClick, text }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 2rem;
  padding: 0px 1.25rem;

  outline: none;
  border: none;
  border-radius: 4px;
  background: tomato;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;

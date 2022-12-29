import styled from 'styled-components';
import { mainColor } from '../../theme';

const Button = ({ color, onClick, text }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;

  outline: none;
  border: none;
  border-radius: 15px;
  background: ${props => props.color === 'transparent' && 'transparent'};
  background: ${props => props.color === 'main' && `${mainColor}`};
  color: #fff;
  font-size: 1rem;
  /* font-weight: bold; */

  &:hover {
    cursor: pointer;
  }
`;

export default Button;

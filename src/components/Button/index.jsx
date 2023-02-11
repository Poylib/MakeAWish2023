import styled from 'styled-components';
import { mainColor } from '../../theme';

const Button = ({ color, onClick, text, icon }) => {
  return (
    <ButtonContainer color={color} onClick={onClick} icon={icon}>
      {text}&nbsp;{icon}
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
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;
`;

export default Button;

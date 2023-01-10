import { useState } from 'react';
import styled from 'styled-components';
import { blackcolor } from '../../theme';

const MenuButton = () => {
  const [openSide, setOpenSide] = useState(false);
  const BtnChange = () => {
    setOpenSide(!openSide);
  };
  return (
    <MenuContainer className={openSide && 'change'} onClick={BtnChange}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </MenuContainer>
  );
};

export default MenuButton;

const MenuContainer = styled.div`
  z-index: 30;
  div {
    border-radius: 5px;
  }
  .bar1,
  .bar2,
  .bar3 {
    margin: 6px 0;
    width: 35px;
    height: 5px;
    background-color: ${blackcolor};
    transition: 0.4s;
  }
  &.change {
    .bar1 {
      background-color: #fff;
      -webkit-transform: rotate(-45deg) translate(-8px, 8px);
      transform: rotate(-45deg) translate(-8px, 8px);
    }
    .bar2 {
      background-color: #fff;
      opacity: 0;
    }
    .bar3 {
      background-color: #fff;
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`;

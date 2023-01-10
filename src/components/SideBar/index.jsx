import styled from 'styled-components';
import background from '../../assets/makewish/wish-background.png';
const SideBar = ({ isSideBar }) => {
  console.log(isSideBar);
  return <SideBarContainer isSideBar={isSideBar}></SideBarContainer>;
};

const SideBarContainer = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: 70%;
  height: 100vh;
  max-height: 1100px;
  background: url(${background});
  background-repeat: no-repeat;
  z-index: 30;
  transform: translateX(${({ isSideBar }) => (isSideBar ? '-100%' : '0%')});
  transition: 0.4s ease;
`;
export default SideBar;

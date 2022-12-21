import styled from 'styled-components';
import hill from '../../assets/main/main-hill.png';
import trees from '../../assets/main/main-trees-lines.png';
import sun from '../../assets/main/main-sun.png';
import lines from '../../assets/main/main-clothesline.png';
const MainBackground = () => {
  return (
    <MainBackgroundContainer>
      <img src={sun} className='sun' />
      <img src={hill} className='hill' />
      <img src={trees} className='trees' />
      <img src={lines} />
    </MainBackgroundContainer>
  );
};
export default MainBackground;

const MainBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  position: absolute;
  top: 0%;
  height: 100vh;
  overflow: hidden;
  img {
    width: 1440px;
    position: absolute;
  }
`;

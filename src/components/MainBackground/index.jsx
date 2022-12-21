import styled from 'styled-components';
import hill from '../../assets/main/main-hill.png';
import trees from '../../assets/main/main-trees-lines.png';
const MainBackground = () => {
  return (
    <MainBackgroundContainer>
      {/* <img src={hill} /> */}
      <img src={trees} />
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
  height: 960px;
  overflow: hidden;
  img {
    width: 1440px;
    height: 960px;
  }
`;

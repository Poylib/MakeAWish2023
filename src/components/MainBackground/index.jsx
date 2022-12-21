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
  width: 1440px;
  position: absolute;
  bottom: 0%;
  img {
    width: 1440px;
  }
`;

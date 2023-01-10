import styled from 'styled-components';
import useStore from '../../context/store';
import hill from '../../assets/main/main-hill.png';
import trees from '../../assets/main/main-trees-lines.png';
import sun from '../../assets/main/main-sun.png';
import lines from '../../assets/main/main-clothesline.png';
import pocket from '../../assets/main/pocket-shadow.png';
import { useEffect, useState } from 'react';
import { fadeIn } from '../../utils/Animation/index.jsx';

const MainBackground = () => {
  const { introPass } = useStore();
  const [openFade, setOpenFade] = useState(false);
  useEffect(() => {
    if (introPass) {
      setTimeout(() => {
        setOpenFade(true);
      }, 1000);
    } else {
      setOpenFade(true);
    }
  });
  return (
    <MainBackgroundContainer>
      <img src={sun} className='sun-trees' />
      <img src={trees} className='sun-trees' />
      {openFade && (
        <>
          <img src={lines} className='lines-pocket' />
          {introPass && <img src={pocket} className='lines-pocket' />}
        </>
      )}
      <img src={hill} className='hill' />
    </MainBackgroundContainer>
  );
};
export default MainBackground;

const MainBackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  height: 100vh;
  overflow: hidden;
  img {
    height: 90vh;
    position: absolute;
    top: 10vh;
  }
  .sun-trees {
    animation: ${fadeIn} 1.7s;
  }
  .lines-pocket {
    animation: ${fadeIn} 1s;
  }
`;

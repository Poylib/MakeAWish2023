import styled from 'styled-components';
import useStore from '../../context/store';
import hill from '../../assets/main/main-hill.png';
import trees from '../../assets/main/main-trees-lines.png';
import sun from '../../assets/main/main-sun.png';
import lines from '../../assets/main/main-clothesline.png';
import pocket from '../../assets/main/pocket-shadow.png';
import { useEffect, useState } from 'react';
import { fadeIn } from '../../utils/Animation.jsx';

const MainBackground = () => {
  const { introPass } = useStore();
  const [openFade, setOpenFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenFade(true);
    }, 1000);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  position: absolute;
  bottom: 0%;
  height: 100vh;
  overflow: hidden;
  img {
    width: 70rem;
    /* se반응형 70rem */
    position: absolute;
    bottom: 0%;
  }
  .sun-trees {
    animation: ${fadeIn} 3s;
  }
  .lines-pocket {
    animation: ${fadeIn} 1s ease;
  }
`;

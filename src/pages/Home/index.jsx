import styled from 'styled-components';
import useStore from '../../context/store';
import { HomeContainer } from '../Intro';
import { contentFontColor, headercolor } from '../../theme';
import { useEffect, useState } from 'react';
import MainBackground from '../../components/MainBackground';
import Button from '../../components/Button';
const Home = () => {
  const [pocketCounts, setPocketCounts] = useState(200000);
  const { falseIntroPass } = useStore();
  useEffect(() => {
    falseIntroPass();
  }, []);
  return (
    <HomeContainer>
      <ContentBody>
        <div className='header'>
          <div className='font-box'>
            <h2 className='headercolor'>{pocketCounts.toLocaleString()}</h2>
            <h2>개의</h2>
          </div>
          <h2>소원이 달렸어요</h2>
        </div>
        <div>
          <div></div>
        </div>
        <div className='footer-box'>
          <Button text='다른 소원들 보기' />
        </div>
      </ContentBody>
      <MainBackground />
    </HomeContainer>
  );
};

const ContentBody = styled.article`
  display: flex;
  height: 45rem;
  max-width: 700px;
  /* max-height: 950px; */
  .header {
    display: flex;
    padding-left: 5%;
    justify-content: center;
    flex-direction: column;
    .font-box {
      display: flex;
      padding-bottom: 7px;
      .headercolor {
        color: ${headercolor};
        margin-right: 6px;
      }
    }
    h2 {
      font-size: 30px;
      color: ${contentFontColor};
    }
  }
`;

export default Home;

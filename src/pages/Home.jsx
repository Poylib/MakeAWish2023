import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <article>
        <p>Home</p>
      </article>
    </StyledHome>
  );
};
export default Home;

const StyledHome = styled.main`
  width: 100vw;
  background-color: #E4DDCC;
  article {
    width: 375px;
    height: 100vh;
    background-color: inherit;
    margin: 0 auto;
  }
`;

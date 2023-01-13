import React from 'react';
import styled from 'styled-components';

const TopKeyword = () => {
  return (
    <Container>
      <Title>실시간 인기 키워드</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  height: 50px;
  border-radius: 20px;
  background-color: rgb(246, 239, 229, 0.4);
  /* background-color: red; */
`;

export default TopKeyword;

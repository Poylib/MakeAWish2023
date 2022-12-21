import { useState } from 'react';
import styled from 'styled-components';
import WishModal from '../../components/WishModal';
import Button from '../../components/Button';

const Home = () => {
  const [isWishModal, setIsWishModal] = useState(true);

  return (
    <HomeContainer>
      <Button
        onClick={() => {
          setIsWishModal(true);
        }}
        text='소원빌기'
      />
      {isWishModal && <WishModal isWishModal={isWishModal} setIsWishModal={setIsWishModal} />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

export default Home;

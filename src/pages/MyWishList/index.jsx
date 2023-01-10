import styled from 'styled-components';
import WishList from '../../components/WishList';

const MyWishList = () => {
  return (
    <MyWishListContainer>
      <WishList />
    </MyWishListContainer>
  );
};

const MyWishListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgColor};
`;

export default MyWishList;

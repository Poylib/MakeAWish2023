import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import { GiTargetDummy } from 'react-icons/gi';
import WishList from '../../components/WishList';

const MyWishList = () => {
  const [myWishList, setMyWishList] = useState([]);

  useEffect(() => {
    const getMtWish = async () => {
      const uuid = localStorage.getItem('uuid');
      try {
        const { data } = await api.get(`mywish?uuid=${uuid}&skip=1&limit=3`);
        setMyWishList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMtWish();
  }, []);

  return (
    <MyWishListContainer>
      <WishList title='내가 빈 소원' icon={<GiTargetDummy />} wishList={myWishList} />;
    </MyWishListContainer>
  );
};

const MyWishListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
`;

export default MyWishList;

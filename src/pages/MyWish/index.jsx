import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';
import pocket from '../../assets/main/pockets/shadow.png';

const MyWish = () => {
  const [myWishList, setMyWishList] = useState([]);
  const [isNoWish, setIsNoWish] = useState(false);

  const getMyWish = async () => {
    const uuid = localStorage.getItem('uuid');
    try {
      const { data } = await api.get(`mywish?uuid=${uuid}&skip=1&limit=3`);
      !data.length && setIsNoWish(true);
      console.log(data);
      setMyWishList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyWish();
  }, []);

  return (
    <MyWishContainer>
      <WishList title='내가 빈 소원' icon={pocket} wishList={myWishList} loader={getMyWish} isNoWish={isNoWish} />
    </MyWishContainer>
  );
};

const MyWishContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
`;

export default MyWish;

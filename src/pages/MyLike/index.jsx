import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const MyLike = () => {
  const [myLikeList, setMyLikeList] = useState([]);
  const [isNoWish, setIsNoWish] = useState(false);

  const getLike = async () => {
    const uuid = localStorage.getItem('uuid');
    try {
      const { data } = await api.get(`like?uuid=${uuid}&skip=1&=5`);
      !data.length && setIsNoWish(true);
      setMyLikeList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLike();
  }, []);

  return (
    <MyLikeContainer>
      <WishList title='내가 응원한 소원' wishList={myLikeList} loader={getLike} isNoWish={isNoWish} />
    </MyLikeContainer>
  );
};

const MyLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
`;

export default MyLike;

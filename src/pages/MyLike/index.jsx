import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const MyLike = () => {
  const [myLikeList, setMyLikeList] = useState([]);

  useEffect(() => {
    const getLike = async () => {
      const uuid = localStorage.getItem('uuid');
      try {
        const { data } = await api.get(`like?uuid=${uuid}&skip=1&limit=5`);
        setMyLikeList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLike();
  }, []);

  return (
    <MyLikeContainer>
      <WishList title='내가 응원한 소원' wishList={myLikeList} />
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

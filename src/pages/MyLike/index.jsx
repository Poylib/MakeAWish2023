import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const MyLike = () => {
  const [myLikeList, setMyLikeList] = useState([]);
  const [isNoWish, setIsNoWish] = useState(false);
  const [page, setPage] = useState(1);
  const getLike = async () => {
    const uuid = localStorage.getItem('uuid');
    try {
      const { data } = await api.get(`like?uuid=${uuid}&skip=${page}&limit=3`);
      if (data.length || myLikeList.length) setMyLikeList([...myLikeList, ...data]);
      else setIsNoWish(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLike();
  }, [page]);

  return (
    <MyLikeContainer>
      <WishList //
        title='내가 응원한 소원'
        wishList={myLikeList}
        setWishList={setMyLikeList}
        loader={getLike}
        isNoWish={isNoWish}
        page={page}
        setPage={setPage}
      />
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

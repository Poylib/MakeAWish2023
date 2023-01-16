import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';
import pocket from '../../assets/main/pockets/shadow.png';

const MyWish = () => {
  const [myWishList, setMyWishList] = useState([]);
  const [isNoWish, setIsNoWish] = useState(false);
  const [page, setPage] = useState(1);
  const getMyWish = async () => {
    const uuid = localStorage.getItem('uuid');
    try {
      const { data } = await api.get(`mywish?uuid=${uuid}&skip=${page}&limit=4`);
      if (data.length || myWishList.length) setMyWishList([...myWishList, ...data]);
      else setIsNoWish(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyWish();
  }, [page]);

  return (
    <MyWishContainer>
      <WishList //
        title='내가 빈 소원'
        icon={pocket}
        wishList={myWishList}
        loader={getMyWish}
        isNoWish={isNoWish}
        page={page}
        setPage={setPage}
      />
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

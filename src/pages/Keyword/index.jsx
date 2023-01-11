import { useState, useEffect } from 'react';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const Keyword = () => {
  const [keywordList, setKeywordList] = useState([]);

  //임시
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    //임시 keyword GET
    const loader = async () => {
      try {
        const { data } = await api.get(`/keyword`);
        console.log(data);
        setKeyword(data[0].keyword);
      } catch (error) {
        console.log(error);
      }
    };
    loader();

    const getKeywordList = async () => {
      try {
        const { data } = await api.get(`/search?keyword=${keyword}&skip=1&limit=3`);
        setKeywordList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getKeywordList();
  }, []);

  return (
    <KeywordContainer>
      <WishList title='인기 키워드' wishList={keywordList} keyword={keyword} />
    </KeywordContainer>
  );
};

const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
`;

export default Keyword;
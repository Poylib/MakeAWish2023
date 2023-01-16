import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const Keyword = () => {
  const navigate = useNavigate();
  const [keywordRank, setKeywordRank] = useState([]);
  const [keywordList, setKeywordList] = useState([]);

  //임시
  const [keyword, setKeyword] = useState('로또');

  useEffect(() => {
    setIndex(Number(new URLSearchParams(location.search).get('index')));
    getKeywordRank();
    getKeywordList();
  }, [index, keyword, prevIndex, prevKeyword, nextIndex, nextKeyword]);

  const getPrevKeyword = () => {
    if (index > 0) {
      setPrevIndex(index - 1);
    } else if (index === 0) {
      setPrevIndex(9);
    }
    prevIndex && setPrevKeyword(keywordRank[prevIndex].keyword);
  };

  const getNextKeyword = () => {
    if (index < 9) {
      setNextIndex(index + 1);
    } else if (index === 9) {
      setNextIndex(0);
    }
    nextIndex && setNextKeyword(keywordRank[nextIndex].keyword);
  };

  const getKeywordRank = async () => {
    try {
      const { data } = await api.get(`/keyword`);
      console.log(data);
      // console.log(data[0]?.keyword);
      setKeyword(data[0].keyword);
    } catch (error) {
      console.log(error);
    }
  };

  const getKeywordList = async () => {
    try {
      const { data } = await api.get(`/search?keyword=${keyword}&skip=1&limit=10`);
      setKeywordList([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrevKeywordList = () => {
    navigate(`/search?index=${prevIndex}&keyword=${prevKeyword}`);
  };

  const getNextKeywordList = () => {
    navigate(`/search?index=${nextIndex}&keyword=${nextKeyword}`);
  };

  return (
    <KeywordContainer>
      <WishList title='인기 키워드' wishList={keywordList} keyword={keyword} prev={getPrevKeywordList} next={getNextKeywordList} prevKeyword={prevKeyword} nextKeyword={nextKeyword} />
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

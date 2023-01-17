import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import styled from 'styled-components';
import WishList from '../../components/WishList';

const Keyword = () => {
  const navigate = useNavigate();
  const keyword = new URLSearchParams(location.search).get('keyword');
  const indexNum = Number(new URLSearchParams(location.search).get('index'));
  const [keywordRank, setKeywordRank] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState();

  const [prevIndex, setPrevIndex] = useState();
  const [nextIndex, setNextIndex] = useState();

  const [indexArr, setIndexArr] = useState([0, indexNum, 0]);
  const [prevKeyword, setPrevKeyword] = useState('');
  const [nextKeyword, setNextKeyword] = useState('');
  useEffect(() => {
    getKeywordRank();
    getKeywordList();
    if (indexNum === 0) {
      setIndexArr([9, indexNum, indexNum + 1]);
    } else if (indexNum === 9) {
      setIndexArr([indexNum - 1, indexNum, 0]);
    } else setIndexArr([indexNum - 1, indexNum, indexNum + 1]);
  }, [keyword, keywordRank]);

  const getKeywordRank = async () => {
    try {
      const { data } = await api.get(`keyword`);
      setKeywordRank(data);
      if (keywordRank.length) {
        setPrevKeyword(keywordRank[indexArr[0]].keyword);
        setNextKeyword(keywordRank[indexArr[2]].keyword);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getKeywordList = async () => {
    try {
      const { data } = await api.get(`search?keyword=${keyword}&skip=1&limit=3`);
      // console.log(data);
      // if (data.length || keywordList.length) setKeywordList([...keywordList, ...data]); 다음 키워드 반영 안됨
      setKeywordList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrevKeywordList = () => {
    prevKeyword && navigate(`/search?index=${indexArr[0]}&keyword=${prevKeyword}`);
  };

  const getNextKeywordList = () => {
    nextKeyword && navigate(`/search?index=${indexArr[2]}&keyword=${nextKeyword}`);
  };

  return (
    <KeywordContainer>
      <WishList //
        title='인기 키워드'
        wishList={keywordList}
        setWishList={setKeywordList}
        keyword={keyword}
        prev={getPrevKeywordList}
        next={getNextKeywordList}
        prevKeyword={prevKeyword}
        nextKeyword={nextKeyword}
        page={page}
        setPage={setPage}
        indexArr={indexArr}
      />
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

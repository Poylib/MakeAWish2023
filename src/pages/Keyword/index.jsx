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
  const getIndex = Number(new URLSearchParams(location.search).get('index'));
  const getKeyword = new URLSearchParams(location.search).get('keyword');
  const [keyword, setKeyword] = useState('');
  const [prevKeyword, setPrevKeyword] = useState('');
  const [nextKeyword, setNextKeyword] = useState('');
  const [prevIndex, setPrevIndex] = useState();
  const [index, setIndex] = useState(getIndex);
  const [nextIndex, setNextIndex] = useState();

  useEffect(() => {
    //임시 keyword GET
    loader();
    getKeywordList();
  }, []);

  const loader = async () => {
    try {
      const { data } = await api.get(`keyword`);
      console.log('키워드 순위', data);
      // setKeywordRank(data);
      // if (index > 0) {
      //   setPrevIndex(index - 1);
      // } else if (index === 0) {
      //   setPrevIndex(9);
      // }
      // setPrevKeyword(data[prevIndex]?.keyword);
      setIndex(getIndex);
      setKeyword(data[index]?.keyword);
      console.log('0번째 키워드', data[0].keyword);
      // if (index < 9) {
      //   setNextIndex(index + 1);
      // } else if (index === 9) {
      //   setNextIndex(0);
      // }
      // setNextKeyword(data[nextIndex]?.keyword);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('키워드', keyword);

  // console.log(typeof index);
  // console.log('현재 키워드 인덱스', index);
  // // console.log('22', keyword);
  // console.log('이전 키워드', prevKeyword);
  // console.log('이후 키워드', nextKeyword);

  const getKeywordList = async () => {
    try {
      const { data } = await api.get(`search?keyword=짱&skip=1&limit=10`);
      console.log('키워드 검색 게시글', data);
      setKeywordList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrevKeyword = () => {
    navigate(`/search?index=${prevIndex}&keyword=${prevKeyword}`);
    // setIndex(getIndex);
    // console.log('이동 후', index);
    // setKeyword(getKeyword);
    // console.log('이동 후', keyword);
    // if (index > 0) {
    //   setPrevIndex(index - 1);
    // } else if (index === 0) {
    //   setPrevIndex(9);
    // }
    // setPrevKeyword(keywordRank[prevIndex].keyword);
    // console.log('이동 후', prevKeyword);
    // if (index < 9) {
    //   setNextIndex(index + 1);
    // } else if (index === 9) {
    //   setNextIndex(0);
    // }
    // setNextKeyword(keywordRank[nextIndex].keyword);
    // console.log('이동 후', nextKeyword);
  };

  console.log('키워드리스트', keywordList);

  const getNextKeyword = () => {
    navigate(`/search?index=${nextIndex}&keyword=${nextKeyword}`);
  };

  return (
    keywordList && (
      <KeywordContainer>
        <WishList title='인기 키워드' wishList={keywordList} keyword={keyword} prev={getPrevKeyword} next={getNextKeyword} prevKeyword={prevKeyword} nextKeyword={nextKeyword} />
      </KeywordContainer>
    )
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

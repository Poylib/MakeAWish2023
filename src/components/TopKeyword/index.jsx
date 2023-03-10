import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { api } from '../../api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pocket from '../../assets/main/pockets/shadow.png';
import { useNavigate } from 'react-router-dom';

const TopKeyword = ({ data }) => {
  return (
    <Container>
      <Title>실시간 인기 키워드</Title>
      <CardSlier data={data} />
    </Container>
  );
};

export const CardSlier = ({ data }) => {
  const navigate = useNavigate();
  const goToKeywordDetail = (item, idx) => {
    navigate(`/search?index=${idx}&keyword=${item.keyword}`);
  };
  const settings = {
    infinite: true,
    autoplay: true,
    vertical: true,
    arrows: false,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      {data !== undefined &&
        data.map((item, idx) => {
          return (
            <div className='slidePage' key={idx}>
              <div className='content' onClick={() => goToKeywordDetail(item, idx)}>
                <RankingPocket idx={1} ranking={idx} bool={true} />
                <h1 className='keyword'>{item.keyword}</h1>
              </div>
            </div>
          );
        })}
    </StyledSlider>
  );
};

export const RankingPocket = ({ idx, ranking, bool }) => {
  return (
    <PocketImg carousel={bool}>
      <img src={pocket} style={{ opacity: idx === 1 ? 1 : 0.3 }} />
      <span className='ranking'>{ranking + 1}</span>
    </PocketImg>
  );
};

export const Ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Font = css`
  font-family: 'Pretendard';
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 10px;
  padding: 15px 30px 15px 20px;
  width: 90%;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(246, 239, 229, 0.4);
  ${Font}
`;

const Title = styled.div`
  color: ${({ theme }) => theme.contentFontColor};
  opacity: 0.9;
`;

const StyledSlider = styled(Slider)`
  ${Font}
  color: ${({ theme }) => theme.contentFontColor};

  .slick-list {
    width: 100px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;

    .keyword {
      width: 100px;
      text-align: right;
      line-height: 30px;
      ${Ellipsis}
    }
  }
`;

export const PocketImg = styled.div`
  margin: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  width: 20px;

  img {
    width: 20px;
  }

  .ranking {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: ${props => (props.carousel ? 'translate(-50%, -35%)' : 'translate(-50%, -50%)')};

    color: white;
    font-size: 12px;
  }
`;

export default TopKeyword;

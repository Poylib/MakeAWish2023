import { api } from '../../api';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import { BsArrow90DegRight, BsArrow90DegDown } from 'react-icons/bs';
import Button from '../Button';

const CoachMark = () => {
  const getUuid = async () => {
    try {
      const { data } = await api.get('id');
      localStorage.setItem('uuid', data.uuid);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <CoachMarkContainer>
        <div className='menu'>
          <BsArrow90DegRight className='icon' />
          <p>메뉴를 열어볼 수 있어요</p>
        </div>
        <div className='make-wish'>
          <BsArrow90DegDown />
          &nbsp;&nbsp;
          <p>소원을 빌 수 있어요</p>
        </div>
        <div className='read-wish'>
          <p>
            복주머니를 클릭하면
            <br />
            사람들의 소망을 담은 소원을
            <br />
            확인할 수 있어요 : -)
          </p>
        </div>
        <div className='keyword'>
          <BsArrow90DegDown />
          &nbsp;&nbsp;<p>인기 키워드 게시글을 볼 수 있어요</p>
        </div>
        <div className='other-wish'>
          <BsArrow90DegDown />
          &nbsp;&nbsp;
          <p>다른 소원으로 새로고침 할 수 있어요</p>
        </div>
        <Button color='main' text='모두 확인했어요' icon={<GiCheckMark />} onClick={getUuid} />
      </CoachMarkContainer>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;

  display: flex;
  justify-content: center;
`;

const CoachMarkContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: 100%;
  min-height: 700px;
  max-height: 1100px;
  padding: 1.5rem;
  color: #fff;
  font-family: 'UhBeeRice';
  ${({ theme }) => theme.textFont2};

  div {
    display: flex;
    align-items: center;
  }

  p {
    text-align: center;
    line-height: 1.5;
  }

  svg {
    font-size: 1.2rem;
  }

  .menu {
    position: relative;
    top: 1.5%;
    left: 33%;
    flex-direction: column;

    .icon {
      margin-left: 20px;
      margin-bottom: 5px;
      @media screen and (min-width: 400px) {
        margin-left: 40px;
      }
      @media screen and (min-width: 440px) {
        margin-left: 60px;
      }
    }
  }

  .make-wish {
    position: relative;
    top: 10%;
    @media screen and (min-height: 730px) {
      top: 12.5%;
    }
    @media screen and (min-height: 855px) {
      top: 15%;
    }
    @media screen and (min-height: 900px) {
      top: 12%;
    }
    @media screen and (min-height: 1000px) {
      top: 17%;
    }
    @media screen and (min-height: 1100px) {
      top: 19%;
    }
    left: -20%;
    flex-direction: row;
  }

  .read-wish {
    position: relative;
    top: 30%;
    flex-direction: column;
    font-size: 1.2rem;
  }

  .keyword {
    position: relative;
    bottom: -50%;
    @media screen and (min-height: 700px) {
      bottom: -53%;
    }
    @media screen and (min-height: 750px) {
      bottom: -55%;
    }
    @media screen and (min-height: 800px) {
      bottom: -58%;
    }
    @media screen and (min-height: 840px) {
      bottom: -60%;
    }
    @media screen and (min-height: 900px) {
      bottom: -63%;
    }
    @media screen and (min-height: 950px) {
      bottom: -65%;
    }
    @media screen and (min-height: 1100px) {
      bottom: -68%;
    }
    flex-direction: row;
  }

  .other-wish {
    position: relative;
    bottom: -55%;
    @media screen and (min-height: 700px) {
      bottom: -58%;
    }
    @media screen and (min-height: 750px) {
      bottom: -60%;
    }
    @media screen and (min-height: 800px) {
      bottom: -63%;
    }
    @media screen and (min-height: 840px) {
      bottom: -65%;
    }
    @media screen and (min-height: 900px) {
      bottom: -68%;
    }
    @media screen and (min-height: 950px) {
      bottom: -70%;
    }
    @media screen and (min-height: 1100px) {
      bottom: -73%;
    }
    flex-direction: row;
  }

  button {
    position: relative;
    bottom: -30%;
    width: 180px;
    height: 50px;
    font-size: 1rem;
  }
`;

export default CoachMark;
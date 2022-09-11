import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper";
import { mainStyle } from "../../style/Globalstyle";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/swiperstyle.css";
import { useParams } from "react-router-dom";
import { PubDB } from "../../PortDB";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  padding: 0 50px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;
const Title = styled.h3`
  font-size: 60px;
  font-weight: 900;
  padding-top: 70px;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const Page = styled.div`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    top: 120px;
  }
`;
const SlideWrap = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: block;
    position: relative;
  }
`;
const SlideNum = styled.div`
  font-size: 315px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    font-size: 100px;
    padding-top: 6px;
  }
`;
// const MoSlideTitle = styled.div`
//   font-size: 20px;
//   font-weight: 900;
//   color: white;
//   display: none;
//   @media screen and (max-width: 500px) {
//     display: block;
//     position: absolute;
//     top: 50px;
//     left: 130px;
//   }
// `;
const SlideTextWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;
const TextWrap = styled.div`
  width: 350px;
  margin-right: 30px;
  font-size: 35px;
  font-weight: 900;
  color: white;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 20px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 80px;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;
const PostBtn = styled.div`
  width: 150px;
  height: 40px;
  font-size: 18px;
  border-radius: 10px;
  background-color: white;
  color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.5s;
  margin-right: 20px;
  &:hover {
    background-color: #333;
    color: white;
  }
  @media screen and (max-width: 500px) {
    background-color: #333;
    color: white;
    svg {
      display: none;
    }
  }
`;
const GitBtn = styled.div`
  width: 150px;
  height: 40px;
  font-size: 18px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: #333;
  transition: 0.5s;
  &:hover {
    background-color: ${mainStyle.gitColor};
    color: white;
  }
  @media screen and (max-width: 500px) {
    background-color: ${mainStyle.gitColor};
    color: white;
  }
`;
const SlideImg = styled.img`
  width: 745px;
  height: 490px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-40%);
  }
`;
const TsTextWrap = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
`;
const TsText = styled.div`
  display: flex;
  font-size: 110px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;

export const Publishing = ({ bgcolor }) => {
  useEffect(() => {
    const ts = document.querySelector(".tstext");
    const text1 = `Html Css Publishing SeoulGarden`.split(" ");
    const textarr = (ele, arr) => {
      arr.push(...arr);
      for (let i = 0; i < arr.length; i++) {
        ele.innerText += `${arr[i]}\u00A0\u00A0\u00A0\u00A0`;
      }
    };
    textarr(ts, text1);
    let count1 = 0;
    const animateText = (count, element, direction) => {
      if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
      }
      element.style.transform = `translateX(${count * direction}px)`;
      return count;
    };
    const textanimate = () => {
      count1++;
      count1 = animateText(count1, ts, -1);
      window.requestAnimationFrame(textanimate);
    };
    textanimate();
  }, []);
  return (
    <Wrap color={bgcolor}>
      <Title className="title">Publishing</Title>
      {PubDB.length < 2 ? (
        <Swiper>
          <Page>1 / 1</Page>
          {PubDB.map((con) => (
            <SwiperSlide>
              <SlideWrap>
                <SlideNum color={bgcolor}>{con.pjnumber}</SlideNum>
                {/* <MoSlideTitle>{con.name}</MoSlideTitle> */}
                <SlideTextWrap>
                  <TextWrap>
                    {con.name}
                    <BtnWrap>
                      <a target="_blank" href={`${con.pjpost}`}>
                        <PostBtn>
                          View <FontAwesomeIcon icon={faArrowRightLong} />
                        </PostBtn>
                      </a>
                      <a target="_blank" href={`${con.gitpost}`}>
                        <GitBtn>
                          <i className="fa-brands fa-github"></i> GitHub
                        </GitBtn>
                      </a>
                    </BtnWrap>
                  </TextWrap>
                  <SlideImg src={`${con.img}`} />
                </SlideTextWrap>
              </SlideWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Pagination, Mousewheel, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            type: "progressbar",
          }}
          mousewheel={true}
          navigation
        >
          {PubDB.map((con) => (
            <SwiperSlide>
              <SlideWrap>
                <SlideNum color={bgcolor}>{con.pjnumber}</SlideNum>
                {/* <MoSlideTitle>{con.name}</MoSlideTitle> */}
                <SlideTextWrap>
                  <TextWrap>
                    {con.name}
                    <BtnWrap>
                      <a target="_blank" href={`${con.pjpost}`}>
                        <PostBtn>
                          View <FontAwesomeIcon icon={faArrowRightLong} />
                        </PostBtn>
                      </a>
                      <a target="_blank" href={`${con.gitpost}`}>
                        <GitBtn>
                          <i className="fa-brands fa-github"></i> GitHub
                        </GitBtn>
                      </a>
                    </BtnWrap>
                  </TextWrap>
                  <SlideImg src={`${con.img}`} />
                </SlideTextWrap>
              </SlideWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <TsTextWrap>
        <TsText className="tstext" color={bgcolor}></TsText>
      </TsTextWrap>
    </Wrap>
  );
};

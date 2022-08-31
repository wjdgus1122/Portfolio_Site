import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { PubDB } from "../../PortDB";
import { mainStyle } from "../../style/Globalstyle";
import "swiper/css";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.navyColor};
  padding: 0 50px;
  position: relative;
  overflow: hidden;
`;
const Title = styled.h3`
  font-size: 60px;
  font-weight: 900;
  padding-top: 70px;
  color: white;
`;
const Gage = styled.div`
  width: 500px;
  height: 2px;
  background-color: white;
  display: flex;
`;
const Bar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${mainStyle.grayColor};
`;
const SlideWrap = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SlideNum = styled.div`
  font-size: 315px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${mainStyle.navyColor};
`;
const SlideTextWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const TextWrap = styled.div`
  width: 350px;
  margin-right: 30px;
  font-size: 35px;
  font-weight: 900;
  color: white;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
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
`;
const SlideImg = styled.img`
  width: 745px;
  height: 490px;
`;
const TsTextWrap = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0px;
`;
const TsText = styled.div`
  display: flex;
  font-size: 110px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${mainStyle.navyColor};
`;

export const Publishing = () => {
  useEffect(() => {
    const pubset = () => {
      const ts = document.querySelector(".tstext");
      const text1 = "Html Css Publishing SeoulGarden".split(" ");

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
    };
    pubset();
  }, []);
  return (
    <Wrap>
      <Title>Html / Css</Title>
      <Gage>
        {PubDB.map((con) => (
          <>
            <Bar />
          </>
        ))}
      </Gage>
      <Swiper>
        {PubDB.map((con) => (
          <SwiperSlide>
            <SlideWrap>
              <SlideNum>{con.pjnumber}</SlideNum>
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
                        <i class="fa-brands fa-github"></i> GitHub
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
      <TsTextWrap>
        <TsText className="tstext"></TsText>
      </TsTextWrap>
    </Wrap>
  );
};

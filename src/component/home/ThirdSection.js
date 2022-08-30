import styled from "styled-components";
import { mainStyle } from "./../../style/Globalstyle";
import { useEffect } from "react";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const TitleWrap = styled.div`
  display: flex;
  padding: 0 50px;
  &.titlewrap {
    justify-content: end;
  }
`;
const TdNumber = styled.div`
  font-size: 315px;
  font-weight: 900;
  color: ${(props) => props.color};
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
`;
const TdTextWrap = styled.div`
  margin-left: 65px;
  padding-top: 214px;
  position: relative;
  z-index: 99;
  &.sctextwrap {
    margin-left: 0;
    margin-right: 65px;
    padding-top: 152px;
  }
`;
const TdTitle = styled.div`
  font-size: 60px;
  font-weight: 900;
  color: white;
  &.sctitle {
    text-align: end;
  }
`;
const TdText = styled.div`
  font-size: 45px;
  font-weight: 900;
  margin-left: 100px;
  color: white;
  &.sctext {
    margin-left: 0;
    margin-right: 100px;
    text-align: end;
  }
`;
const TdTsTextWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotateZ(-22deg);
  &.tdtstextwrap {
    justify-content: flex-end;
    transform: translateY(-50%) rotateZ(22deg);
  }
`;
const TdTsText1 = styled.div`
  display: flex;
  padding: 3rem 0;
  font-size: 110px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${(props) => props.color};
`;
const TdConWrap = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  right: 50px;
  z-index: 99;
  &.scconwrap {
    left: 50px;
    right: auto;
  }
`;
const TdBtn = styled.div`
  width: 240px;
  height: 65px;
  border: 1px solid white;
  border-radius: 15px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 350px;
  margin-right: 130px;
  background-color: ${(props) => props.color};
  &.scbtn {
    margin-right: 0;
    margin-left: 130px;
  }
`;
const TdCon = styled.div`
  width: 815px;
  height: 530px;
  border: 1px solid white;
  border-radius: 30px;
  background-color: ${(props) => props.color};
`;
const TdTopCircle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
`;
const TopCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 25px;
`;
const TdConImgWrap = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TdConImg = styled.div`
  width: 770px;
  height: 400px;
  border-radius: 25px;
  background-color: white;
`;

export const ThirdSection = ({ concolor }) => {
  useEffect(() => {
    const mainset = () => {
      const tdtsText1 = document.querySelector(".tdtstext1");
      const tdtsText2 = document.querySelector(".tdtstext2");
      const tdtsText3 = document.querySelector(".tdtstext3");
      const Text1 = "Publishing ReactProject ToyProject".split(" ");

      const tstexthandle = (element, textArr) => {
        textArr.push(...textArr);
        for (let i = 0; i < textArr.length; i++) {
          element.innerText += `${textArr[i]}\u00A0\u00A0\u00A0\u00A0`;
        }
      };

      tstexthandle(tdtsText1, Text1);
      tstexthandle(tdtsText2, Text1);
      tstexthandle(tdtsText3, Text1);

      let count1 = 0;
      let count2 = 0;
      let count3 = 0;

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
        count2++;
        count3++;

        count1 = animateText(count1, tdtsText1, -1);
        count2 = animateText(count2, tdtsText2, 1);
        count3 = animateText(count3, tdtsText3, -1);

        window.requestAnimationFrame(textanimate);
      };
      textanimate();
    };
    mainset();
  }, []);
  return (
    <>
      <Section>
        <TitleWrap>
          <TdNumber color={concolor}>01</TdNumber>
          <TdTextWrap>
            <TdTitle>HTML5 / CSS</TdTitle>
            <TdText>Html 과 Css만을 이용하여 프로젝트</TdText>
          </TdTextWrap>
        </TitleWrap>
        <TdTsTextWrap>
          <TdTsText1 className="tdtstext1" color={concolor}></TdTsText1>
        </TdTsTextWrap>
        <TdConWrap>
          <TdBtn color={concolor}>
            View <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </TdBtn>
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.bagieColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.blueColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg />
            </TdConImgWrap>
          </TdCon>
        </TdConWrap>
      </Section>
      <Section className="second">
        <TitleWrap className="titlewrap">
          <TdTextWrap className="sctextwrap">
            <TdTitle className="sctitle">React</TdTitle>
            <TdText className="sctext">
              React를 이용하여 HTML/Css Javascript를 <br /> 이용하여 만든
              프로젝트
            </TdText>
          </TdTextWrap>
          <TdNumber color={concolor}>02</TdNumber>
        </TitleWrap>
        <TdTsTextWrap className="tdtstextwrap">
          <TdTsText1 className="tdtstext2" color={concolor}></TdTsText1>
        </TdTsTextWrap>
        <TdConWrap className="scconwrap">
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.bagieColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.navyColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg />
            </TdConImgWrap>
          </TdCon>
          <TdBtn color={concolor} className="scbtn">
            <FontAwesomeIcon icon={faArrowLeftLong} /> View
          </TdBtn>
        </TdConWrap>
      </Section>
      <Section>
        <TitleWrap>
          <TdNumber color={concolor}>03</TdNumber>
          <TdTextWrap>
            <TdTitle>Toy Project</TdTitle>
            <TdText>
              React 및 여러가지 언어를 사용하여 만든 간단한 프로젝트
            </TdText>
          </TdTextWrap>
        </TitleWrap>
        <TdTsTextWrap>
          <TdTsText1 className="tdtstext3" color={concolor}></TdTsText1>
        </TdTsTextWrap>
        <TdConWrap>
          <TdBtn color={concolor}>
            View <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </TdBtn>
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.navyColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.blueColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg />
            </TdConImgWrap>
          </TdCon>
        </TdConWrap>
      </Section>
    </>
  );
};

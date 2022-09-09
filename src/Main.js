import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { FirstSection } from "./component/home/FirstSection";
import { SecondSection } from "./component/home/SecondSection";
import { ThirdSection } from "./component/home/ThirdSection";
import { mainStyle } from "./style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgcolor};
  transition: 0.5s;
`;

const TopBtn = styled.div`
  width: 35px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: ${(props) => props.dis};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: white;
  position: fixed;
  bottom: 20px;
  right: 7px;
  font-size: 15px;
  z-index: 100;
  @media screen and (max-width: 500px) {
    height: 35px;
    border-radius: 50%;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
`;
const BtnText = styled.div`
  writing-mode: tb-rl;
  letter-spacing: 2px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Main = () => {
  const [wrapcolor, setWrapColor] = useState(`${mainStyle.mainColor}`);
  const [btndis, setBtnDis] = useState(`none`);

  const wphandle = () => {
    const scl = window.pageYOffset;
    const hgt = window.innerWidth;
    if (hgt < 500) {
      if (scl < 900) {
        setWrapColor(`${mainStyle.mainColor}`);
      } else if (scl > 900 && scl < 1500) {
        setWrapColor(`${mainStyle.navyColor}`);
      } else if (scl > 1500 && scl < 2100) {
        setWrapColor(`${mainStyle.blueColor}`);
      } else if (scl > 2100) {
        setWrapColor(`${mainStyle.bagieColor}`);
      }
    } else {
      if (scl < 900) {
        setWrapColor(`${mainStyle.mainColor}`);
      } else if (scl > 900 && scl < 2334) {
        setWrapColor(`${mainStyle.navyColor}`);
      } else if (scl > 2335 && scl < 3234) {
        setWrapColor(`${mainStyle.blueColor}`);
      } else if (scl > 3235) {
        setWrapColor(`${mainStyle.bagieColor}`);
      }
    }

    if (scl > 30) {
      setBtnDis(`flex`);
    } else {
      setBtnDis(`none`);
    }
  };
  window.addEventListener("scroll", wphandle);

  const topbtnhandle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrap bgcolor={wrapcolor}>
      <FirstSection color={wrapcolor} />
      <SecondSection />
      <ThirdSection concolor={wrapcolor} />
      <TopBtn onClick={topbtnhandle} dis={btndis}>
        <FontAwesomeIcon icon={faArrowUpLong} />
        <BtnText>맨위로</BtnText>
      </TopBtn>
    </Wrap>
  );
};

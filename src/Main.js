import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: white;
  position: fixed;
  bottom: 20px;
  right: 7px;
  font-size: 15px;
`;
const BtnText = styled.div`
  writing-mode: tb-rl;
  letter-spacing: 2px;
`;

export const Main = () => {
  const [wrapcolor, setWrapColor] = useState(`${mainStyle.mainColor}`);

  const wphandle = () => {
    const scl = window.pageYOffset;
    if (scl < 900) {
      setWrapColor(`${mainStyle.mainColor}`);
    } else if (scl > 900 && scl < 2334) {
      setWrapColor(`${mainStyle.navyColor}`);
    } else if (scl > 2335 && scl < 3234) {
      setWrapColor(`${mainStyle.blueColor}`);
    } else if (scl > 3235) {
      setWrapColor(`${mainStyle.bagieColor}`);
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
      <TopBtn onClick={topbtnhandle}>
        <FontAwesomeIcon icon={faArrowUpLong} />
        <BtnText>맨위로</BtnText>
      </TopBtn>
    </Wrap>
  );
};

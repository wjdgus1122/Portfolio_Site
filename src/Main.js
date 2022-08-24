import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "./style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgcolor};
  transition: 0.5s;
`;
const FirstSection = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const IconMenu = styled.div`
  position: absolute;
  right: 50px;
  z-index: 9999;
  cursor: pointer;
  & .menubar:first-child {
    transform: rotateZ(${(props) => props.toprt})
      translate(${(props) => props.topts});
    transition: 0.5s;
    background-color: ${(props) => props.color};
  }
  & .menubar:last-child {
    margin-top: 10px;
    transform: rotateZ(${(props) => props.btrt});
    transition: 0.5s;
    background-color: ${(props) => props.color};
  }
`;
const Menubar = styled.div`
  width: 40px;
  height: 5px;
`;
const ClickMenu = styled.div`
  width: 400px;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: ${(props) => props.menuposi};
  z-index: 99;
  transition: 0.5s;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  & .menutext {
    padding-top: 100px;
  }
`;
const MenuText = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: black;
  padding-left: 30px;
  margin-bottom: 70px;
  cursor: pointer;
  &:hover {
    color: ${mainStyle.blueColor};
  }
`;
const SecondSection = styled.div`
  width: 100%;
  height: 100vh;
`;
const ThirdSection = styled.div`
  width: 100%;
  height: 100vh;
`;
const TopBtn = styled.div`
  width: 50px;
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
  right: 50px;
`;
const BtnText = styled.div`
  writing-mode: tb-rl;
  letter-spacing: 2px;
`;

export const Main = () => {
  const [wrapcolor, setWrapColor] = useState(`${mainStyle.navyColor}`);
  const [topbar, setTopbar] = useState(`0`);
  const [topbarts, setTopbarTs] = useState("0");
  const [bottombar, setBottombar] = useState(`0`);
  const [barcolor, setBarColor] = useState("white");
  const [hdmenu, setHdMenu] = useState("-400px");
  const wphandle = () => {
    const scl = window.pageYOffset;
    if (scl < 2334) {
      setWrapColor(`${mainStyle.navyColor}`);
    } else if (scl > 2335 && scl < 3234) {
      setWrapColor(`${mainStyle.blueColor}`);
    } else if (scl > 3235) {
      setWrapColor(`${mainStyle.bagieColor}`);
    }
  };
  window.addEventListener("scroll", wphandle);
  const hdhandle = () => {
    if (topbar === "0") {
      setTopbar(`45deg`);
      setBottombar(`-45deg`);
      setTopbarTs("10px, 10px");
      setBarColor("black");
      setHdMenu(`0`);
    } else {
      setTopbar(`0`);
      setBottombar(`0`);
      setTopbarTs("0");
      setBarColor("white");
      setHdMenu("-400px");
    }
  };
  const topbtnhandle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrap bgcolor={wrapcolor}>
      <FirstSection>
        <Header>
          <IconMenu
            onClick={hdhandle}
            toprt={topbar}
            topts={topbarts}
            btrt={bottombar}
            color={barcolor}
          >
            <Menubar className="menubar" />
            <Menubar className="menubar" />
          </IconMenu>
          <ClickMenu menuposi={hdmenu}>
            <MenuText className="menutext">Publishing</MenuText>
            <MenuText>React Project</MenuText>
            <MenuText>Toy Project</MenuText>
          </ClickMenu>
        </Header>
      </FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <ThirdSection></ThirdSection>
      <ThirdSection></ThirdSection>
      <TopBtn onClick={topbtnhandle}>
        <FontAwesomeIcon icon={faArrowUpLong} />
        <BtnText>맨위로</BtnText>
      </TopBtn>
    </Wrap>
  );
};

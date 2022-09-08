import styled from "styled-components";
import { mainStyle } from "./../style/Globalstyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${(props) => props.bgColor};
  & a {
    font-size: 25px;
    color: white;
    padding-right: 130px;
    padding-bottom: 5px;
  }
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
  z-index: 999;
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

export const Header = () => {
  const [topbar, setTopbar] = useState(`0`);
  const [topbarts, setTopbarTs] = useState("0");
  const [bottombar, setBottombar] = useState(`0`);
  const [barcolor, setBarColor] = useState("white");
  const [hdmenu, setHdMenu] = useState("-400px");
  const [sclbg, setSclBg] = useState("none");
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
  const hdscl = () => {
    const scl = window.pageYOffset;
    if (scl < 10) {
      setSclBg(`none`);
    } else if (scl > 10 && scl < 1100) {
      setSclBg(`${mainStyle.mainColor}`);
    } else if (scl < 2334 && 1100 < scl) {
      setSclBg(`${mainStyle.navyColor}`);
    } else if (scl > 2335 && scl < 3234) {
      setSclBg(`${mainStyle.blueColor}`);
    } else if (scl > 3235) {
      setSclBg(`${mainStyle.bagieColor}`);
    }
  };
  window.addEventListener("scroll", hdscl);
  return (
    <Wrap bgColor={sclbg}>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHouse} />
      </Link>
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
        <Link to={"/publishing"}>
          <MenuText className="menutext" onClick={hdhandle}>
            Publishing
          </MenuText>
        </Link>
        <Link to={"/react"}>
          <MenuText onClick={hdhandle}>React Project</MenuText>
        </Link>
        <Link to={"/toy"}>
          <MenuText onClick={hdhandle}>Toy Project</MenuText>
        </Link>
      </ClickMenu>
    </Wrap>
  );
};

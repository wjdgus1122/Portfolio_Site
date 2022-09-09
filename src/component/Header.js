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
  }
  & a:first-child {
    margin-right: 50px;
  }
  & a:hover {
    color: ${mainStyle.bagieColor};
  }
  @media screen and (max-width: 500px) {
    & a:first-child {
      margin-right: 0;
    }
  }
`;
const Menu = styled.div`
  font-weight: 900;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const IconMenu = styled.div`
  position: absolute;
  right: 20px;
  z-index: 9999;
  cursor: pointer;
  display: none;
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
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const Menubar = styled.div`
  width: 30px;
  height: 3px;
`;
const ClickMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: ${(props) => props.menuposi};
  z-index: 999;
  transition: 0.5s;
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & a {
      width: 100%;
    }
  }
`;
const MenuText = styled.div`
  font-size: 35px;
  font-weight: 900;
  color: ${mainStyle.mainColor};
  padding-bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  const [topbar, setTopbar] = useState(`0`);
  const [topbarts, setTopbarTs] = useState("0");
  const [bottombar, setBottombar] = useState(`0`);
  const [barcolor, setBarColor] = useState("white");
  const [hdmenu, setHdMenu] = useState("-100%");
  const [sclbg, setSclBg] = useState("none");
  const hdhandle = () => {
    if (topbar === "0") {
      setTopbar(`45deg`);
      setBottombar(`-45deg`);
      setTopbarTs("9px, 9px");
      setBarColor(`${mainStyle.mainColor}`);
      setHdMenu(`0`);
    } else {
      setTopbar(`0`);
      setBottombar(`0`);
      setTopbarTs("0");
      setBarColor("white");
      setHdMenu("-100%");
    }
  };
  const hdscl = () => {
    const scl = window.pageYOffset;
    if (scl < 10) {
      setSclBg(`none`);
    } else {
      setSclBg(`${mainStyle.mainColor}`);
    }
  };
  window.addEventListener("scroll", hdscl);
  return (
    <Wrap bgColor={sclbg}>
      <Link to={"/"}>
        <Menu>Home</Menu>
      </Link>
      <Link to={"/publishing"}>
        <Menu>Publishing</Menu>
      </Link>
      <Link to={"/react"}>
        <Menu>React Project</Menu>
      </Link>
      <Link to={"/toy"}>
        <Menu>Toy Project</Menu>
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
        <Link to={"/"}>
          <MenuText onClick={hdhandle}>Home</MenuText>
        </Link>
        <Link to={"/publishing"}>
          <MenuText onClick={hdhandle}>Publishing</MenuText>
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

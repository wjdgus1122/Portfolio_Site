import styled from "styled-components";
import { mainStyle } from "./../style/Globalstyle";
import { useState } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
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
  return (
    <Wrap>
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
    </Wrap>
  );
};

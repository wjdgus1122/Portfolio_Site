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
  right: 80px;
  & .menubar:last-child {
    margin-top: 10px;
  }
`;
const Menubar = styled.div`
  width: 40px;
  height: 5px;
  background-color: white;
`;
const SecondSection = styled.div`
  width: 100%;
  height: 100vh;
`;
const ThirdSection = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = () => {
  const [wrapcolor, setWrapColor] = useState(``);
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
  return (
    <Wrap bgcolor={wrapcolor}>
      <FirstSection>
        <Header>
          <IconMenu>
            <Menubar className="menubar" />
            <Menubar className="menubar" />
          </IconMenu>
        </Header>
      </FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <ThirdSection></ThirdSection>
      <ThirdSection></ThirdSection>
    </Wrap>
  );
};

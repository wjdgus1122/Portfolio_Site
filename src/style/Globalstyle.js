import { createGlobalStyle } from "styled-components";

export const mainStyle = {
  navyColor: "#1C3879",
  blueColor: "#607EAA",
  bagieColor: "#EAE3D2",
  grayColor: "#707070",
  gitColor: "#6000AA",
};

export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        word-break: keep-all;
    }
    a{
      text-decoration: none;
    }
    li{
      list-style: none;
    }
`;

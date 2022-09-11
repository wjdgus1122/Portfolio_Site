import { createGlobalStyle } from "styled-components";

export const mainStyle = {
  mainColor: "#493323",
  navyColor: "#91684A",
  blueColor: "#EAAC7F",
  bagieColor: "#FFDF91",
  grayColor: "#707070",
  gitColor: "#6000AA",
  hoverColor: "#FFC996",
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

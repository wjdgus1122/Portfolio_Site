import styled, { keyframes } from "styled-components";
import { mainStyle } from "./../../style/Globalstyle";
import { useEffect } from "react";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainLogo = styled.div`
  padding-top: 120px;
  padding-left: 50px;
  & svg {
    fill: none;
    width: 1280px;
  }
  & svg .mainlogo path {
    stroke: white;
    stroke-dasharray: var(--length);
    animation: logocolor var(--duration) forwards;
    animation-delay: var(--delay);
  }
  @keyframes logocolor {
    0% {
      fill: none;
    }
    100% {
      fill: white;
    }
  }
`;
const Transtext1 = styled.div`
  width: 50%;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateZ(25deg);
`;
const Transtext2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 50px;
  left: -100px;
  transform: rotateZ(25deg);
`;
const TsText = styled.p`
  display: flex;
  padding: 3rem 0;
  font-size: 4rem;
  font-weight: 900;
  text-shadow: -1px 0 ${mainStyle.grayColor}, 0 1px ${mainStyle.grayColor},
    1px 0 ${mainStyle.grayColor}, 0 -1px ${mainStyle.grayColor};
  color: ${mainStyle.navyColor};
`;
const ScrollIcon = styled.div`
  width: 50px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  svg {
    animation: scrollbtn 0.5s infinite alternate;
    position: absolute;
    bottom: 0;
  }
  @keyframes scrollbtn {
    0% {
      bottom: 0;
    }
    100% {
      bottom: 20px;
    }
  }
`;

const ScrollText = styled.div`
  margin-bottom: 40px;
`;

export const FirstSection = () => {
  useEffect(() => {
    const mainset = () => {
      const mainGroup = document.querySelector(".mainlogo");
      const mainPaths = mainGroup.querySelectorAll("path");
      const tsText1 = document.querySelector(".tstext1");
      const tsText2 = document.querySelector(".tstext2");
      const Text1 = "Publishing ReactProject ToyProject".split(" ");
      mainPaths.forEach((path, index) => {
        const length = path.getTotalLength();
        path.style.setProperty("--length", length);
        path.style.setProperty("--delay", index * 100 + "ms");
        path.style.setProperty("--duration", length * 1 + "ms");
      });
      const tstexthandle = (element, textArr) => {
        textArr.push(...textArr);
        for (let i = 0; i < textArr.length; i++) {
          element.innerText += `${textArr[i]}\u00A0\u00A0\u00A0\u00A0`;
        }
      };
      tstexthandle(tsText1, Text1);
      tstexthandle(tsText2, Text1);

      let count1 = 0;
      let count2 = 0;

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

        count1 = animateText(count1, tsText1, -1);
        count2 = animateText(count2, tsText2, 1);

        window.requestAnimationFrame(textanimate);
      };
      textanimate();
    };
    mainset();
  }, []);
  return (
    <>
      <Section>
        <MainLogo>
          <svg
            id="_레이어_1"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 851.97 316.63"
          >
            <g className="mainlogo">
              <path
                className="logo lg1"
                d="M48.15,102.86c3.64-3.93,5.46-8.89,5.46-14.89V.5h18.3V84.8c0,9.54-3.22,19.13-9.66,28.77-6.44,9.64-15.17,14.47-26.18,14.47-9.66,0-18-4.25-25.03-12.75C4.01,106.79,.5,97.14,.5,86.36H18.8c0,6.84,1.82,12.29,5.46,16.33,3.64,4.04,7.58,6.07,11.82,6.07s8.43-1.96,12.07-5.89Z"
              />
              <path
                className="logo lg2"
                d="M94.53,88.54c1.18,5.43,3.77,10.16,7.75,14.18,3.98,4.02,9.1,6.04,15.38,6.04,4.91,0,9.06-1.44,12.45-4.33,3.39-2.89,5.67-5.59,6.86-8.12h17.03c-2.88,9.54-7.41,17.22-13.6,23.02-6.19,5.8-13.77,8.71-22.75,8.71-10.84,0-20.08-4.67-27.7-14-7.62-9.33-11.44-20.63-11.44-33.91s3.81-24.26,11.44-33.6c7.62-9.33,16.86-14,27.7-14,8.98,0,18.04,4.67,27.19,14s12.96,23.33,11.44,42h-61.76Zm45.24-19.29c-1.36-5.43-4.15-9.69-8.39-12.78-4.24-3.09-8.81-4.64-13.72-4.64-5.25,0-9.78,1.69-13.6,5.06-3.81,3.37-6.65,7.49-8.51,12.36h44.22Z"
              />
              <path
                className="logo lg3"
                d="M174.58,46.54c7.62-9.33,16.77-14,27.45-14s20.08,4.67,27.7,14,11.44,20.53,11.44,33.6-3.81,24.58-11.44,33.91-16.86,14-27.7,14-19.82-4.67-27.45-14-11.44-20.63-11.44-33.91,3.81-24.26,11.44-33.6Zm11.06,13.6c-4.66,5.54-6.99,12.21-6.99,20s2.33,14.52,6.99,20.16c4.66,5.64,10.12,8.46,16.39,8.46s11.98-2.82,16.65-8.46c4.66-5.64,6.99-12.36,6.99-20.16s-2.33-14.46-6.99-20c-4.66-5.54-10.21-8.31-16.65-8.31s-11.73,2.77-16.39,8.31Z"
              />
              <path
                className="logo lg4"
                d="M316.84,45.61c6.1,7.68,9.15,15.87,9.15,24.58v56.31h-18.3v-48.94c0-5.58-1.96-11-5.88-16.26-3.92-5.26-8.65-7.9-14.2-7.9s-10.28,2.63-14.2,7.9c-3.92,5.27-5.88,10.69-5.88,16.26v48.94h-18.3V37.21h18.3v11.82c9.32-9.95,18.38-14.93,27.19-14.93s16.01,3.84,22.11,11.51Z"
              />
              <path
                className="logo lg5"
                d="M399.5,112.18c-4.07,5.4-8.73,9.33-13.98,11.82-5.25,2.49-10.17,3.63-14.74,3.42-8.81-.21-17.07-4.82-24.78-13.84-7.71-9.02-11.56-20.27-11.56-33.75s3.85-24.73,11.56-33.75c7.71-9.02,16.05-13.53,25.03-13.53,4.4,0,9.11,.99,14.1,2.96,5,1.97,9.78,6.28,14.36,12.91v-13.07h18.3V117.52c0,9.86-3.77,20.15-11.31,30.86-7.54,10.7-17.58,16.06-30.12,16.06-15.93,0-29.48-12.24-40.66-36.71h17.03c6.95,11.61,14.31,17.42,22.11,17.42,6.61,0,12.37-2.96,17.28-8.87,4.91-5.91,7.37-12.8,7.37-20.69v-3.42Zm-39.87-11.17c4.59,5.58,10.09,8.38,16.49,8.38s11.89-2.79,16.49-8.38c4.59-5.58,6.89-12.43,6.89-20.55s-2.3-14.66-6.89-20.25c-4.59-5.58-10.09-8.37-16.49-8.37s-11.9,2.79-16.49,8.37c-4.59,5.58-6.89,12.34-6.89,20.25s2.29,14.97,6.89,20.55Z"
              />
              <path
                className="logo lg6"
                d="M429.36,2.06h18.3V51.52h48.54V2.06h18.3V126.49h-18.3v-55.68h-48.54v55.68h-18.3V2.06Z"
              />
              <path
                className="logo lg7"
                d="M523.01,32.54h18.81l20.33,63.15,20.33-63.15h18.55l-41.68,124.12h-16.52l10.93-34.84-30.75-89.28Z"
              />
              <path
                className="logo lg8"
                d="M617.04,88.85c1.18,5.43,3.77,10.16,7.75,14.18,3.98,4.02,9.11,6.04,15.38,6.04,4.91,0,9.06-1.44,12.45-4.33,3.39-2.89,5.67-5.59,6.86-8.12h17.03c-2.88,9.54-7.41,17.22-13.6,23.02-6.19,5.8-13.77,8.71-22.75,8.71-10.84,0-20.08-4.67-27.7-14s-11.44-20.63-11.44-33.91,3.81-24.26,11.44-33.6,16.86-14,27.7-14c8.98,0,18.04,4.67,27.19,14s12.96,23.33,11.44,42h-61.76Zm45.24-19.29c-1.36-5.43-4.15-9.69-8.39-12.78-4.24-3.09-8.81-4.64-13.72-4.64-5.25,0-9.79,1.69-13.6,5.06-3.81,3.37-6.65,7.49-8.51,12.36h44.22Z"
              />
              <path
                className="logo lg9"
                d="M700.52,46.54c7.62-9.33,16.77-14,27.45-14s20.08,4.67,27.7,14,11.44,20.53,11.44,33.6-3.81,24.58-11.44,33.91-16.86,14-27.7,14-19.82-4.67-27.45-14c-7.62-9.33-11.44-20.63-11.44-33.91s3.81-24.26,11.44-33.6Zm11.06,13.6c-4.66,5.54-6.99,12.21-6.99,20s2.33,14.52,6.99,20.16c4.66,5.64,10.12,8.46,16.39,8.46s11.98-2.82,16.65-8.46c4.66-5.64,6.99-12.36,6.99-20.16s-2.33-14.46-6.99-20c-4.66-5.54-10.21-8.31-16.65-8.31s-11.73,2.77-16.39,8.31Z"
              />
              <path
                className="logo lg10"
                d="M842.32,45.61c6.1,7.68,9.15,15.87,9.15,24.58v56.31h-18.3v-48.94c0-5.58-1.96-11-5.88-16.26-3.92-5.26-8.65-7.9-14.2-7.9s-10.29,2.63-14.2,7.9c-3.92,5.27-5.88,10.69-5.88,16.26v48.94h-18.3V37.21h18.3v11.82c9.32-9.95,18.38-14.93,27.19-14.93s16.01,3.84,22.11,11.51Z"
              />
              <path
                className="logo lg11"
                d="M75.34,200.54c6.52,7.18,9.78,16.5,9.78,27.95s-3.22,20.41-9.66,27.49c-6.44,7.08-13.64,10.62-21.6,10.62H25.41v47.59H7.11v-124.43H53.87c7.79,0,14.95,3.59,21.47,10.78Zm-49.94,8.51v38.26h25.76c3.87,0,7.45-1.76,10.73-5.29,3.28-3.52,4.93-8.09,4.93-13.69,0-6.01-1.64-10.73-4.93-14.15-3.28-3.42-6.86-5.13-10.73-5.13H25.41Z"
              />
              <path
                className="logo lg12"
                d="M96.56,234.24c7.62-9.33,16.77-14,27.45-14s20.08,4.67,27.7,14,11.44,20.53,11.44,33.6-3.81,24.58-11.44,33.91-16.86,14-27.7,14-19.82-4.67-27.45-14-11.44-20.63-11.44-33.91,3.81-24.26,11.44-33.6Zm11.06,13.6c-4.66,5.54-6.99,12.21-6.99,20s2.33,14.52,6.99,20.16c4.66,5.64,10.12,8.46,16.39,8.46s11.98-2.82,16.65-8.46c4.66-5.64,6.99-12.36,6.99-20.16s-2.33-14.46-6.99-20c-4.66-5.54-10.21-8.31-16.65-8.31s-11.73,2.77-16.39,8.31Z"
              />
              <path
                className="logo lg13"
                d="M192.57,234.63c1.61-2.49,4.11-4.87,7.5-7.15,4.4-2.9,9.99-3.73,16.77-2.49v16.49c-7.29-.62-12.71,.31-16.26,2.8-4.24,2.91-7.12,6.64-8.64,11.2-1.52,4.56-2.29,7.67-2.29,9.33v51.33h-18.3v-89.28h18.3v12.75c.34-.83,1.31-2.49,2.92-4.98Z"
              />
              <path
                className="logo lg14"
                d="M258.38,240.78v73.42h-18.3v-73.42h-14.74v-15.86h14.74v-35.15h18.3v35.15h14.74v15.86h-14.74Z"
              />
              <path
                className="logo lg15"
                d="M279.8,189.76h72.94v19.29h-54.64v30.17h53.37v19.29h-53.37v55.68h-18.3v-124.43Z"
              />
              <path
                className="logo lg16"
                d="M371.92,232.69c7.62-9.33,16.77-14,27.45-14s20.08,4.67,27.7,14,11.44,20.53,11.44,33.6-3.81,24.58-11.44,33.91-16.86,14-27.7,14-19.82-4.67-27.45-14c-7.62-9.33-11.44-20.63-11.44-33.91s3.81-24.26,11.44-33.6Zm11.06,13.6c-4.66,5.54-6.99,12.21-6.99,20s2.33,14.52,6.99,20.16c4.66,5.64,10.12,8.46,16.39,8.46s11.98-2.82,16.65-8.46c4.66-5.64,6.99-12.36,6.99-20.16s-2.33-14.46-6.99-20c-4.66-5.54-10.21-8.31-16.65-8.31s-11.73,2.77-16.39,8.31Z"
              />
              <path
                className="logo lg17"
                d="M466.24,314.19h-18.3v-124.43h18.3v124.43Z"
              />
              <path
                className="logo lg18"
                d="M476.12,209.05v-19.29h18.3v19.29h-18.3Zm0,105.15v-86.17h18.3v86.17h-18.3Z"
              />
              <path
                className="logo lg19"
                d="M518.52,232.69c7.62-9.33,16.77-14,27.45-14s20.08,4.67,27.7,14,11.44,20.53,11.44,33.6-3.81,24.58-11.44,33.91-16.86,14-27.7,14-19.82-4.67-27.45-14c-7.62-9.33-11.44-20.63-11.44-33.91s3.81-24.26,11.44-33.6Zm11.06,13.6c-4.66,5.54-6.99,12.21-6.99,20s2.33,14.52,6.99,20.16c4.66,5.64,10.12,8.46,16.39,8.46s11.98-2.82,16.65-8.46c4.66-5.64,6.99-12.36,6.99-20.16s-2.33-14.46-6.99-20c-4.66-5.54-10.21-8.31-16.65-8.31s-11.73,2.77-16.39,8.31Z"
              />
            </g>
          </svg>
        </MainLogo>
        <Transtext1 className="tstextwrap">
          <TsText className="tstext1"></TsText>
        </Transtext1>
        <Transtext2 className="tstextwrap">
          <TsText className="tstext2"></TsText>
        </Transtext2>
        <ScrollIcon>
          <ScrollText>Scroll</ScrollText>
          <FontAwesomeIcon icon={faArrowDownLong} />
        </ScrollIcon>
      </Section>
    </>
  );
};

import styled from "styled-components";
import { useEffect, useState } from "react";
import { SkillDB } from "../../PortDB";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  position: relative;
  box-sizing: border-box;
`;
const SkTitleWrap = styled.div`
  width: 170px;
  height: 110px;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
`;
const SkTitle = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
`;
const SkillWrap = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
`;
const Skill = styled.div`
  width: 320px;
  color: white;
`;
const SkillImg = styled.img`
  width: 100%;
  height: 290px;
`;
const SkillText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SkillTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
`;
const SkillPc = styled.div`
  font-size: 70px;
  font-weight: 900;
`;
const PjTitleWrap = styled.div`
  width: 360px;
  height: 110px;
  margin-top: 230px;
  position: relative;
  overflow: hidden;
`;
const PjTitle = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
`;

export const SecondSection = () => {
  const [sktitle, setSkTitle] = useState("115px");
  const [pjtitle, setPjTitle] = useState("115px");
  const wphandle = () => {
    const scl = window.pageYOffset;
    if (scl > 700) {
      setSkTitle("0");
    } else {
      setSkTitle("115px");
    }

    if (scl > 900) {
      setPjTitle("0");
    } else {
      setPjTitle("115px");
    }
  };
  window.addEventListener("scroll", wphandle);
  useEffect(() => {
    const mainset = () => {
      let percenttext = document.getElementsByClassName("percent");
      let percount = 0;
      let percount1 = 0;
      let percount2 = 0;
      let percount3 = 0;

      const textanimate = () => {
        const usscl = window.pageYOffset;
        if (usscl > 700) {
          if (percount < SkillDB[0].percent) {
            percount++;
            percenttext[0].innerHTML = percount + "%";
          }
          if (percount1 < SkillDB[1].percent) {
            percount1++;
            percenttext[1].innerHTML = percount + "%";
          }
          if (percount2 < SkillDB[2].percent) {
            percount2++;
            percenttext[2].innerHTML = percount + "%";
          }
          if (percount3 < SkillDB[3].percent) {
            percount3++;
            percenttext[3].innerHTML = percount + "%";
          }
        }
        window.requestAnimationFrame(textanimate);
      };
      textanimate();
    };
    mainset();
  }, []);
  return (
    <>
      <Section>
        <SkTitleWrap>
          <SkTitle posi={sktitle}>Skill</SkTitle>
        </SkTitleWrap>
        <SkillWrap className="skillwrap">
          {SkillDB.map((skill) => (
            <Skill key={skill.id}>
              <SkillImg src={`${skill.img}`} />
              <SkillText className="skilltext">
                <SkillTitle>{skill.name}</SkillTitle>
                <SkillPc className="percent"></SkillPc>
              </SkillText>
            </Skill>
          ))}
        </SkillWrap>
        <PjTitleWrap>
          <PjTitle posi={pjtitle}>Project</PjTitle>
        </PjTitleWrap>
      </Section>
    </>
  );
};

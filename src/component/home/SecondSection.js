import styled from "styled-components";
import { useState } from "react";
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
const SkillCon = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
`;
const SkillWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
`;
const Skill = styled.div`
  width: 200px;
  color: white;
  margin-right: 50px;
`;
const SkillImg = styled.img`
  width: 100%;
  height: 200px;
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
  const [skposi, setSkPosi] = useState("350px");
  const [pjtitle, setPjTitle] = useState("115px");
  const wphandle = () => {
    const scl = window.pageYOffset;
    if (scl > 700) {
      setSkTitle("0");
      setSkPosi("0");
    } else {
      setSkTitle("115px");
      setSkPosi("350px");
    }

    if (scl > 900) {
      setPjTitle("0");
    } else {
      setPjTitle("115px");
    }
  };
  window.addEventListener("scroll", wphandle);

  return (
    <>
      <Section>
        <SkTitleWrap>
          <SkTitle posi={sktitle}>Skill</SkTitle>
        </SkTitleWrap>
        <SkillCon>
          <SkillWrap posi={skposi}>
            {SkillDB.map((skill) => (
              <Skill key={skill.id}>
                <SkillImg src={`${skill.img}`} />
                <SkillText>
                  <SkillTitle>{skill.name}</SkillTitle>
                </SkillText>
              </Skill>
            ))}
          </SkillWrap>
        </SkillCon>
        <PjTitleWrap>
          <PjTitle posi={pjtitle}>Project</PjTitle>
        </PjTitleWrap>
      </Section>
    </>
  );
};

import pub_1 from "./img/publishing/seoul.png";
import dyson from "./img/react/dyson.png";
import movie from "./img/react/Movie.png";
import login from "./img/toy/Login.png";
import html from "./img/skill/html.png";
import css from "./img/skill/css.png";
import js from "./img/skill/js.png";
import react from "./img/skill/react.png";

export const SkillDB = [
  {
    id: 0,
    img: `${html}`,
    name: "Html",
  },
  {
    id: 1,
    img: `${css}`,
    name: "Css",
  },
  {
    id: 2,
    img: `${js}`,
    name: "JavaScript",
  },
  {
    id: 3,
    img: `${react}`,
    name: "React",
  },
];

export const PubDB = [
  {
    id: 0,
    pjnumber: "01",
    img: `${pub_1}`,
    name: `서울식물원 사이트를 리뉴얼 한 프로젝트`,
    project: "Team Project",
    pjpost: `https://hij00.github.io/seoul_garden_renewal/`,
    gitpost: `https://github.com/wjdgus1122/SeoulGarden`,
  },
];

export const ReactDB = [
  {
    id: 0,
    pjnumber: "01",
    img: `${movie}`,
    name: "영화 & TV프로그램의 정보를 알 수 있는 프로젝트",
    project: "Solo Project",
    pjpost: `https://wjdgus1122.github.io/movie_project`,
    gitpost: `https://github.com/wjdgus1122/movie_project`,
  },
  {
    id: 1,
    pjnumber: "02",
    img: `${dyson}`,
    name: "Dyson사이트를 리뉴얼한 Github 팀 프로젝트",
    project: "Team Project",
    pjpost: `https://wjdgus1122.github.io/dyson_project`,
    gitpost: `https://github.com/wjdgus1122/dyson_project`,
  },
];

export const ToyDB = [
  {
    id: 0,
    pjnumber: "01",
    img: `${login}`,
    name: "Login",
    project: "Solo Project",
    pjpost: "https://wjdgus1122.github.io/Login_project/#/login",
    gitpost: "https://github.com/wjdgus1122/Login_project",
  },
];

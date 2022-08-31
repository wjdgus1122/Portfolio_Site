import pub_1 from "./img/publishing/seoul.png";
import dyson from "./img/react/dyson.png";
import movie from "./img/react/Movie.png";
import login from "./img/toy/Login.png";

export const SkillDB = [
  {
    id: 0,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png`,
    name: "Html",
    percent: 95,
  },
  {
    id: 1,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png`,
    name: "Css",
    percent: 95,
  },
  {
    id: 2,
    img: `https://t1.daumcdn.net/cfile/tistory/2149683A58CA6BF313`,
    name: "JavaScript",
    percent: 70,
  },
  {
    id: 3,
    img: `https://images.velog.io/images/jkzombie/post/347c5994-f870-490a-adbd-9e08120aa37e/1200px-React-icon.svg.png`,
    name: "React",
    percent: 70,
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
  {
    id: 1,
    pjnumber: "02",
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
    name: "영화 & TV프로그램의 정보를 알 수 있는 프로그램",
    project: "Solo Project",
    pjpost: `https://wjdgus1122.github.io/movie_project`,
    gitpost: `https://github.com/wjdgus1122/movie_project`,
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

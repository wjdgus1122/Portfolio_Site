import { Main } from "./Main";
import { Header } from "./component/Header";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle, mainStyle } from "./style/Globalstyle";
import { ProjectPage } from "./component/page/ProjectPage";
import { PubDB, ReactDB, ToyDB } from "./PortDB";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/publishing"
            element={
              <ProjectPage
                title={"Publishing"}
                Db={PubDB}
                tstext={`Html Css Publishing SeoulGarden`}
                bgcolor={`${mainStyle.navyColor}`}
              />
            }
          />
          <Route
            path="/react"
            element={
              <ProjectPage
                title={"React Project"}
                Db={ReactDB}
                tstext={`Html Css JavaScript ReactProject MovieApp Dyson`}
                bgcolor={`${mainStyle.blueColor}`}
              />
            }
          />
          <Route
            path="/toy"
            element={
              <ProjectPage
                title={"Toy Project"}
                Db={ToyDB}
                tstext={`Html Css JavaScript React ToyProject Login`}
                bgcolor={`${mainStyle.bagieColor}`}
              />
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

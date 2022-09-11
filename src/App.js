import { Main } from "./Main";
import { Header } from "./component/Header";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle, mainStyle } from "./style/Globalstyle";
import { Publishing } from "./component/page/Publishing";
import { ReactProject } from "./component/page/ReactProject";
import { ToyProject } from "./component/page/ToyProject";

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
            element={<Publishing bgcolor={`${mainStyle.navyColor}`} />}
          />
          <Route
            path="/react"
            element={<ReactProject bgcolor={`${mainStyle.blueColor}`} />}
          />
          <Route
            path="/toy"
            element={<ToyProject bgcolor={`${mainStyle.bagieColor}`} />}
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

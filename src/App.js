import { Main } from "./Main";
import { Header } from "./component/Header";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./style/Globalstyle";
import { Publishing } from "./component/page/Publishing";
import { ReactPj } from "./component/page/ReactPj";
import { ToyPj } from "./component/page/ToyPj";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/publishing" element={<Publishing />} />
          <Route path="/react" element={<ReactPj />} />
          <Route path="/toy" element={<ToyPj />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

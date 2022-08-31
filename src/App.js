import { Main } from "./Main";
import { Header } from "./component/Header";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./style/Globalstyle";
import { Publishing } from "./component/page/Publishing";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/publishing" element={<Publishing />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

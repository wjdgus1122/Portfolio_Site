import { Main } from "./Main";
import { Header } from "./component/Header";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./style/Globalstyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

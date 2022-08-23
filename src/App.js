import { Main } from "./Main";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./style/Globalstyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

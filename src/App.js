import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/home-page/home";
import Projects from "./Pages/project-page/project_page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

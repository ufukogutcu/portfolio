import { useState } from "react";

import Navbar from "./pagestructure/Navbar";
import Background from "./pagestructure/Background";

import MainPage from "./pages/MainPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";

import "./App.css";

function App() {
  const [page, setPage] = useState("Main");
  const [CVAlert, setCVAlert] = useState(true);

  return (
    <>
      <Background />
      <span className="body">
        <Navbar
          setPage={(page) => {
            setPage(page);
          }}
        />
        {page === "Main" && (
          <MainPage CVAlert={CVAlert} setCVAlert={setCVAlert} />
        )}
        {page === "TechStack" && <TechStackPage />}
        {page === "Projects" && <ProjectsPage />}
      </span>
    </>
  );
}

export default App;

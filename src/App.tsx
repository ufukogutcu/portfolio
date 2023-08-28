import { useState } from "react";

import Navbar from "./pagestructure/Navbar";
import Background from "./pagestructure/Background";

import MainPage from "./pages/MainPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";

import "./App.css";

function App() {
  const [page, setPage] = useState("Main");
  return (
    <>
      <Navbar
        setPage={(page) => {
          setPage(page);
        }}
      ></Navbar>
      <Background></Background>
      {page === "Main" && <MainPage></MainPage>}
      {page === "TechStack" && <TechStackPage></TechStackPage>}
      {page === "Projects" && <ProjectsPage></ProjectsPage>}
    </>
  );
}

export default App;

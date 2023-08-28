import { useState } from "react";

import Navbar from "./Navbar";

import MainPage from "./pages/MainPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [page, setPage] = useState("Main");
  return (
    <>
      <Navbar
        setPage={(page) => {
          setPage(page);
        }}
      ></Navbar>
      {page === "Main" && <MainPage></MainPage>}
      {page === "TechStack" && <TechStackPage></TechStackPage>}
      {page === "Projects" && <ProjectsPage></ProjectsPage>}
    </>
  );
}

export default App;

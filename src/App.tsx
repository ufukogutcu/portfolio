import { useState } from "react";

import MyNavbar from "./MyNavbar";

import MainPage from "./pages/MainPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [page, setPage] = useState("Main");
  return (
    <>
      <MyNavbar
        setPage={(page) => {
          setPage(page);
        }}
      ></MyNavbar>
      {page === "Main" && <MainPage></MainPage>}
      {page === "TechStack" && <TechStackPage></TechStackPage>}
      {page === "Projects" && <ProjectsPage></ProjectsPage>}
    </>
  );
}

export default App;

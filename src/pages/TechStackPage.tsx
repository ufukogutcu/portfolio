import { useState } from "react";
import "./TechStackPage.css";

import { Tabs, Tab } from "@nextui-org/react";

import { frontend_skills, backend_skills, other_skills } from "./skills";

interface StackProps {
  skills: any;
}
function Stack({ skills }: StackProps) {
  return (
    <div className="stack">
      {skills.map((skill: any) => (
        <>
          <div className="skill">
            <img className="logo" src={skill[0]}></img>
            <h1>{skill[1]}</h1>
          </div>
        </>
      ))}
    </div>
  );
}

function TechStackPage() {
  const [page, setPage] = useState("backend");

  return (
    <div className="techstackpage">
      <div className="body">
        <div className="tabs">
          <Tabs
            key="default"
            radius="full"
            size="sm"
            onSelectionChange={(key) => {
              setPage(key.toString());
            }}
            defaultSelectedKey="backend"
          >
            <Tab key="frontend" title="Front end" />
            <Tab key="backend" title="Back end" />
            <Tab key="others" title="Others" />
          </Tabs>
        </div>
        {page === "frontend" && <Stack skills={frontend_skills} />}
        {page === "backend" && <Stack skills={backend_skills} />}
        {page === "others" && <Stack skills={other_skills} />}
      </div>
    </div>
  );
}

export default TechStackPage;

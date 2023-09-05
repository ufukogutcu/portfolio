import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import styles from "./ProjectsPage.module.css";

import { skills, projects } from "./projects";

import { useState } from "react";

interface projectProps {
  name: string;
  link: string;
  image: any;
  description: string;
  skills: any;
}

function Project({ name, link, image, description, skills }: projectProps) {
  return <img src={image} alt={name}></img>;
}

function ProjectsPage() {
  const [projectsList, setProjectList] = useState(projects);

  return (
    <>
      <CheckboxGroup
        label="Used Tech:"
        color="secondary"
        onValueChange={(filter) => {
          if (filter.length === 0) {
            setProjectList(projects);
          } else {
            setProjectList(
              projects.filter((project) => {
                return filter.every((elem) => project.skills.includes(elem));
              })
            );
          }
        }}
        classNames={{
          base: styles.base,
          wrapper: styles.wrapper,
        }}
      >
        {Object.entries(skills).map(([skill, value]) => (
          <Checkbox key={skill} value={skill}>
            {value.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <div className={`${styles.projects}`}>
        {projectsList.map((project: any) => (
          <Project
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsPage;

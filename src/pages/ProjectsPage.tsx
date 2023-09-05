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
  return (
    <div className={styles.project}>
      <h1>{name}</h1>
      <img src={image} alt={name}></img>
      <p>{description}</p>
    </div>
  );
}

function ProjectsPage() {
  const [filters, setFilters] = useState([""]);

  return (
    <div className={styles.projectspage}>
      <CheckboxGroup
        label="Used Tech:"
        color="secondary"
        value={filters}
        onValueChange={setFilters}
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
    </div>
  );
}

export default ProjectsPage;

import {
  CheckboxGroup,
  Checkbox,
  Card,
  CardBody,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import githubLogo from "../static/github.png";

import styles from "./ProjectsPage.module.css";

import { skills, projects } from "./projects";

import { useState } from "react";

interface projectProps {
  name: string;
  link: string;
  github: string;
  image: any;
  description: any;
  skills: any;
}

function Project({
  name,
  link,
  github,
  image,
  description,
  skills,
}: projectProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card
        shadow="sm"
        isPressable
        onPress={onOpen}
        classNames={{
          base: styles.project,
        }}
      >
        <CardBody className="overflow-visible p-0">
          <img alt={name} src={image}></img>
        </CardBody>
        <CardFooter className="text-small justify-center">
          <b>{name}</b>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          base: styles.modal,
          closeButton: styles.modalCloseButton,
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-1 items-center justify-center">
                {name}
                {github !== "" && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <img
                      alt="github"
                      src={githubLogo}
                      style={{ height: "27px", width: "27px" }}
                    ></img>
                  </a>
                )}
              </ModalHeader>
              <ModalBody>{description}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    window.open(link, "_blank", "noreferrer");
                  }}
                >
                  Visit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

function ProjectsPage() {
  const [projectsList, setProjectList] = useState(projects);

  return (
    <>
      <CheckboxGroup
        label="Stack:"
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
          base: styles.filter,
          wrapper: styles.filterwrapper,
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
            github={project.github}
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

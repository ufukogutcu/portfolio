import "./MainPage.css";

import { Tooltip } from "@nextui-org/react";

import githublogo from "../static/github.png";
import linkedinlogo from "../static/linkedin.png";
import cvlogo from "../static/cv.png";
import emaillogo from "../static/email.png";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface Props {
  CVAlert: boolean;
  setCVAlert: (bool: boolean) => void;
}

function MainPage({ CVAlert, setCVAlert }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const downloadCV = () => {
    fetch("Ufuk Ogutcu CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Ufuk Ogutcu CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="mainpage">
      <div className="body">
        <div className="card">
          <h1>Ufuk Ogutcu</h1>
          <h2>Junior Full-stack Developer</h2>
          <div className="links">
            <Tooltip
              content="Linkedin"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a
                className="link"
                href="https://www.linkedin.com/in/ufukogutcu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={linkedinlogo} alt="Linkedin"></img>
              </a>
            </Tooltip>
            <Tooltip
              content="GitHub"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a
                className="link"
                href="https://github.com/ufukogutcu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={githublogo} alt="GitHub"></img>
              </a>
            </Tooltip>
            <Tooltip
              content="CV"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a
                className="link"
                onClick={downloadCV}
                onMouseEnter={() => setCVAlert(false)}
                href="#"
              >
                <img
                  className={CVAlert ? "logo alert" : "logo"}
                  src={cvlogo}
                  alt="CV"
                ></img>
              </a>
            </Tooltip>
            <Tooltip
              content="Email"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a className="link" href="mailto:ufukogutcu@gmail.com">
                <img className="logo" src={emaillogo} alt="Email"></img>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

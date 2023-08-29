import "./MainPage.css";

import { Tooltip } from "@nextui-org/react";

import githublogo from "../static/github.png";
import linkedinlogo from "../static/linkedin.png";
import cvlogo from "../static/cv.png";
import emaillogo from "../static/email.png";

function MainPage() {
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
              >
                <img className="logo" src={linkedinlogo}></img>
              </a>
            </Tooltip>
            <a className="linkgap"></a>
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
              >
                <img className="logo" src={githublogo}></img>
              </a>
            </Tooltip>
            <a className="linkgap"></a>
            <Tooltip
              content="CV"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a className="link" onClick={downloadCV} href="#">
                <img className="logo" src={cvlogo}></img>
              </a>
            </Tooltip>
            <a className="linkgap"></a>
            <Tooltip
              content="Email"
              color="foreground"
              placement="bottom"
              closeDelay={30}
            >
              <a className="link" href="mailto:ufukogutcu@gmail.com">
                <img className="logo" src={emaillogo}></img>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

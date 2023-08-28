import { Link, Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

import "./Navbar.css";

interface Props {
  setPage: (page: string) => void;
}

function Navbar({ setPage }: Props) {
  const [NavPage, setNavPage] = useState("Main");

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
    <ul className="navbar">
      <li className="left">
        <a>Ufuk Ogutcu Logo</a>
      </li>
      <li className="center">
        <Link
          className="side"
          underline={NavPage === "TechStack" ? "always" : "none"}
          size="md"
          href="#"
          aria-current="page"
          onClick={() => {
            setPage("TechStack");
            setNavPage("TechStack");
          }}
        >
          Tech Stack
        </Link>
        <Link
          className="main"
          underline={NavPage === "Main" ? "always" : "none"}
          size="lg"
          href="#"
          aria-current="page"
          onClick={() => {
            setPage("Main");
            setNavPage("Main");
          }}
        >
          Me
        </Link>
        <Link
          className="side"
          underline={NavPage === "Projects" ? "always" : "none"}
          size="md"
          href="#"
          aria-current="page"
          onClick={() => {
            setPage("Projects");
            setNavPage("Projects");
          }}
        >
          Projects
        </Link>
      </li>
      <li className="right">
        <Tooltip content="Download my CV" closeDelay={30}>
          <Button
            onClick={downloadCV}
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Download CV
          </Button>
        </Tooltip>
        <Tooltip content="ufukogutcu@gmail.com" closeDelay={30}>
          <Button
            as={Link}
            color="primary"
            href="mailto:ufukogutcu@gmail.com"
            variant="flat"
          >
            Email
          </Button>
        </Tooltip>
      </li>
    </ul>
  );
}

export default Navbar;

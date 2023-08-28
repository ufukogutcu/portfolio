import { Link, Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

import "./Navbar.css";

interface Props {
  setPage: (page: string) => void;
}

function Navbar({ setPage }: Props) {
  const [NavPage, setNavPage] = useState("Main");

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
          <Link href="#">My CV</Link>
        </Tooltip>
        <Tooltip content="ufukogutcu@gmail.com" closeDelay={30}>
          <Button as={Link} color="primary" href="#" variant="flat">
            Email
          </Button>
        </Tooltip>
      </li>
    </ul>
  );
}

export default Navbar;

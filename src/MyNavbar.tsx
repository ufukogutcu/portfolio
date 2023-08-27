import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";

interface Props {
  setPage: (page: string) => void;
}

function MyNavbar({ setPage }: Props) {
  const [NavPage, setNavPage] = useState("Main");

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Ufuk Ogutcu Logo</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive={NavPage === "Main"}>
          <Link
            href="#"
            aria-current="page"
            onClick={() => {
              setPage("Main");
              setNavPage("Main");
            }}
          >
            Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive={NavPage === "TechStack"}>
          <Link
            href="#"
            aria-current="page"
            onClick={() => {
              setPage("TechStack");
              setNavPage("TechStack");
            }}
          >
            Tech Stack
          </Link>
        </NavbarItem>
        <NavbarItem isActive={NavPage === "Projects"}>
          <Link
            href="#"
            aria-current="page"
            onClick={() => {
              setPage("Projects");
              setNavPage("Projects");
            }}
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Tooltip content="Download my CV" closeDelay={30}>
            <Link href="#">My CV</Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="ufukogutcu@gmail.com" closeDelay={30}>
            <Button as={Link} color="primary" href="#" variant="flat">
              Email
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default MyNavbar;

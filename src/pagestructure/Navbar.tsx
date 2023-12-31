import { Tabs, Tab } from "@nextui-org/react";

import "./Navbar.css";

interface Props {
  setPage: (page: string) => void;
}

function Navbar({ setPage }: Props) {
  return (
    <div className="navbar">
      <Tabs
        key="default"
        radius="full"
        size="lg"
        onSelectionChange={(key) => {
          setPage(key.toString());
        }}
        defaultSelectedKey="Main"
      >
        <Tab key="TechStack" title="Tech Stack" />
        <Tab key="Main" title="Me" />
        <Tab key="Projects" title="Projects" />
      </Tabs>
    </div>
  );
}

export default Navbar;

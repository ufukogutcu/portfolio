import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainpage">
      <div className="body">
        <Card className="max-w-[400px]">
          <div className="flex-col">
            <h1>Ufuk Ogutcu</h1>
            <h2>Full-Stack Developer</h2>
          </div>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default MainPage;

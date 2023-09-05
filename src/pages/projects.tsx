import portfolio from "../static/projects/portfolio.png";
import google from "../static/projects/google.png";

import react_logo from "../static/skills/react.png";
import javascript_logo from "../static/skills/javascript.png";
import typescript_logo from "../static/skills/typescript.png";
import flask_logo from "../static/skills/flask.png";

export let skills = {
  react: {
    name: "React",
    logo: react_logo,
  },
  javascript: {
    name: "JavaScript",
    logo: javascript_logo,
  },
  typescript: {
    name: "TypeScript",
    logo: typescript_logo,
  },
  flask: {
    name: "Flask",
    logo: flask_logo,
  },
};

export let projects = [
  {
    name: "Portfolio",
    link: "aaa.com",
    image: portfolio,
    description: "aaaaaaaaaaaaaaaaaa",
    skills: [skills.react, skills.javascript],
  },
  {
    name: "bbb",
    link: "bbb.com",
    image: google,
    description: "bbbbbbbbbbbbbbbbbb",
    skills: [skills.flask],
  },
  {
    name: "ccc",
    link: "ccc.com",
    image: portfolio,
    description: "cccccccccccccccccc",
    skills: [skills.flask],
  },
  {
    name: "ccc",
    link: "ccc.com",
    image: portfolio,
    description: "cccccccccccccccccc",
    skills: [skills.flask],
  },
];

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
    link: "https://portfolio.ufukogutcu.com",
    github: "https://github.com/ufukogutcu/portfolio",
    image: portfolio,
    description: (
      <>
        <p>This is the portfolio that you are currently viewing.</p>
        <br></br>
        <p>Fun fact:</p>
        <p> All the logos in this website were hand-drawn by me.</p>
      </>
    ),
    skills: ["react", "javascript", "typescript"],
  },
  {
    name: "bbb no github",
    link: "bbb.com",
    github: "",
    image: google,
    description: "bbbbbbbbbbbbbbbbbb",
    skills: ["flask"],
  },
  {
    name: "ccc",
    link: "ccc.com",
    github: "gitc.com",
    image: portfolio,
    description: "cccccccccccccccccc",
    skills: ["flask"],
  },
  {
    name: "ddd",
    link: "ddd.com",
    github: "gitd.com",
    image: google,
    description: "ddddddddddddddddddd",
    skills: ["flask"],
  },
  {
    name: "eee",
    link: "eee.com",
    github: "gite.com",
    image: google,
    description: "eeeeeeeeeeeeeeeee",
    skills: ["flask"],
  },
];

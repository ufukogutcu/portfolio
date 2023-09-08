import portfolio from "../static/projects/portfolio.png";
import google from "../static/projects/google.png";

import react_logo from "../static/skills/react.png";
import javascript_logo from "../static/skills/javascript.png";
import typescript_logo from "../static/skills/typescript.png";
import html_logo from "../static/skills/html.png";
import css_logo from "../static/skills/css.png";
import tailwindcss_logo from "../static/skills/tailwindcss.png";
import python_logo from "../static/skills/python.png";

let react = "react";
let javascript = "javascript";
let typescript = "typescript";
let html = "html";
let css = "css";
let tailwindcss = "tailwindcss";
let python = "python";

export let skills = {
  [react]: {
    name: "React",
    logo: react_logo,
  },
  [javascript]: {
    name: "JavaScript",
    logo: javascript_logo,
  },
  [typescript]: {
    name: "TypeScript",
    logo: typescript_logo,
  },
  [html]: {
    name: "HTML",
    logo: html_logo,
  },
  [css]: {
    name: "CSS",
    logo: css_logo,
  },
  [tailwindcss]: {
    name: "Tailwind CSS",
    logo: tailwindcss_logo,
  },
  [python]: {
    name: "Python",
    logo: python_logo,
  },
};

export let projects = [
  {
    name: "My Portfolio",
    link: "https://portfolio.ufukogutcu.com",
    github: "https://github.com/ufukogutcu/portfolio",
    image: portfolio,
    description: (
      <>
        This is the portfolio that you are currently viewing.
        <br />
        <br />
        Fun fact:
        <br />
        All the logos in this website were hand-drawn by me.
      </>
    ),
    skills: ["react", "javascript", "typescript", "html", "css", "tailwindcss"],
  },
  {
    name: "Bitcoin Bruteforcer",
    link: "bbb.com",
    github: "https://github.com/ufukogutcu/btc-bruteforcer",
    image: google,
    description: "bbbbbbbbbbbbbbbbbb",
    skills: ["python"],
  },
];

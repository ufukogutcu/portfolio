import portfolio from "../static/projects/portfolio.png";
import bitcoinbruteforcer from "../static/projects/bitcoinbruteforcer.png";
import multiplayersudoku from "../static/projects/multiplayersudoku.png";
import google from "../static/projects/google.png";

import react_logo from "../static/skills/react.png";
import javascript_logo from "../static/skills/javascript.png";
import typescript_logo from "../static/skills/typescript.png";
import html_logo from "../static/skills/html.png";
import css_logo from "../static/skills/css.png";
import tailwindcss_logo from "../static/skills/tailwindcss.png";
import python_logo from "../static/skills/python.png";
import unity_logo from "../static/skills/unity.png";
import cs_logo from "../static/skills/cs.png";

let react = "react";
let javascript = "javascript";
let typescript = "typescript";
let html = "html";
let css = "css";
let tailwindcss = "tailwindcss";
let python = "python";
let unity = "unity";
let cs = "cs";
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
  [unity]: {
    name: "Unity",
    logo: unity_logo,
  },
  [cs]: {
    name: "C#",
    logo: cs_logo,
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
    skills: ["react", "typescript", "html", "css", "tailwindcss"],
  },
  {
    name: "Bitcoin Bruteforcer",
    link: "https://replit.com/@ufukogutcu/btc-bruteforcer#bruteforcer.py",
    github: "https://github.com/ufukogutcu/btc-bruteforcer",
    image: bitcoinbruteforcer,
    description: (
      <>
        Did you know that anytime you create a Bitcoin wallet, there is a 1 in
        2^160 chance of getting one that is already being used?
        <br />
        <br />
        This is a Bitcoin Bruteforcer application that can generate new bitcoin
        addresses, check their balances and store them if they are not empty
        using multiple threads.
        <br />
        <br />
        The balance check is done using public APIs, since it is not very common
        or cheap for anyone to run their own bitcoin node. The APIs are random
        cycled to avoid call limits and cooldowns.
        <br />
        <br />
        This python project does not use any external modules. Meaning that
        there are no requirements for it to run.
        <br />
        <br />
        You can try it out online by pressing visit and clicking the green RUN
        button on the opened Replit page.
      </>
    ),
    skills: ["python"],
  },
  {
    name: "Multiplayer Sudoku",
    link: "https://sudoku.ufukogutcu.com/",
    github: "https://github.com/ufukogutcu/UG4-Multiplayer_Sudoku",
    image: multiplayersudoku,
    description: (
      <>
        This is a game of Sudoku with a twist. Along with traditional
        singeplayer Sudoku, it offers multiplayer with various gamemodes:
        <br />
        <br />
        Co-op:
        <br />
        Both players play the same sudoku board, trying to beat it together.
        <br />
        <br />
        VS:
        <br />
        Each player play their own sudoku board, which are different boards with
        same difficulty levels. Players try to finish their board before the
        other player without getting three strikes and losing.
        <br />
        <br />
        VS with Sabotage:
        <br />
        This is the same as the VS gamemode with a little addition. Players can
        spend 30 seconds of their remaining time to sabotage the other player's
        board. Sabotaging blocks one chosen block(9 little squares) of the
        enemies board for a few seconds, preventing them from seeing the numbers
        of that block.
        <br />
        <br />
        The game is normally built for mobile platforms, but you can try out a
        WebGL version by clicking visit.
      </>
    ),
    skills: ["unity", "cs"],
  },
];

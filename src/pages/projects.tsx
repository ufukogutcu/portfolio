import portfolio from "../static/projects/portfolio.png";
import smilemore from "../static/projects/smilemore.png";
import livechat from "../static/projects/livechat.png";
import bitcoinbruteforcer from "../static/projects/bitcoinbruteforcer.png";
import multiplayersudoku from "../static/projects/multiplayersudoku.png";

import backend from "../static/projects/backend.png";

import react_logo from "../static/skills/react.png";
import javascript_logo from "../static/skills/javascript.png";
import typescript_logo from "../static/skills/typescript.png";
import html_logo from "../static/skills/html.png";
import css_logo from "../static/skills/css.png";
import tailwindcss_logo from "../static/skills/tailwindcss.png";
import python_logo from "../static/skills/python.png";
import flask_logo from "../static/skills/flask.png";
import celery_logo from "../static/skills/celery.png";
import rabbitmq_logo from "../static/skills/rabbitmq.png";
import sqlite_logo from "../static/skills/sqlite.png";
import firebase_logo from "../static/skills/firebase.png";
import gcp_logo from "../static/skills/gcp.png";
import unity_logo from "../static/skills/unity.png";
import cs_logo from "../static/skills/cs.png";

let react = "react";
let javascript = "javascript";
let typescript = "typescript";
let html = "html";
let css = "css";
let tailwindcss = "tailwindcss";
let python = "python";
let flask = "flask";
let celery = "celery";
let rabbitmq = "rabbitmq";
let sqlite = "sqlite";
let firebase = "firebase";
let gcp = "gcp";
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
  [flask]: {
    name: "Flask",
    logo: flask_logo,
  },
  [celery]: {
    name: "Celery",
    logo: celery_logo,
  },
  [rabbitmq]: {
    name: "RabbitMQ",
    logo: rabbitmq_logo,
  },
  [sqlite]: {
    name: "SQLite",
    logo: sqlite_logo,
  },
  [firebase]: {
    name: "Firebase",
    logo: firebase_logo,
  },
  [gcp]: {
    name: "Google Cloud",
    logo: gcp_logo,
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
    name: "Smile More",
    link: "https://smilemore.ufukogutcu.com/",
    github: "https://github.com/ufukogutcu/smile-more",
    image: smilemore,
    description: (
      <>
        This is a PWA(Progressive Web App) smile directory.
        <br />
        <br />
        It can be installed to both PCs and mobiles just by clicking install on
        PC browsers and adding to home screen on mobile.
        <br />
        <br />
        The user can upload daily selfies of them smiling, and see the pictures
        listed in a calendar. It's basically a photo album with a nice
        presentation, aiming to make people smile more by seeing themselves
        smile.
        <br />
        <br />
        Although it is implemented, login with Apple button currently does not
        work. This is because Apple logins require Apple Developer program and
        it is quite a bit expensive to enroll.
      </>
    ),
    skills: ["react", "javascript", "firebase", "html", "css"],
  },
  {
    name: "U-Time (Backend)",
    link: "",
    github: "https://github.com/ufukogutcu/U-Time",
    image: backend,
    description: (
      <>
        This is the backend server of an online diary project.
        <br />
        <br />
        The aim of the project is to create an app, where users can make daily
        diary entries and get psychiatric suggestions based on their entries
        using AI.
        <br />
        <br />
        This backend server has all the implementations ready other than the
        diary entry processing AI.
        <br />
        <br />
        By using the endpoints:
        <ul>
          <li>/api/auth/login (POST)</li>
          <li>/api/auth/register (POST)</li>
          <li>/api/auth/profile (GET)</li>
          <li>/api/auth/profile (PUT)</li>
          <li>/api/auth/logout (POST)</li>
          <li>/api/diary/(diary id) (GET)</li>
          <li>/api/diary (GET)</li>
          <li>/api/diary (POST)</li>
          <li>/api/stats (GET)</li>
          <br />A user can register, login, logout using their email and
          password with the help of an auth token.
          <br />
          They can also make diary entries, get their all entries and edit their
          entries.
        </ul>
      </>
    ),
    skills: ["python", "flask", "celery", "rabbitmq", "sqlite"],
  },
  {
    name: "Live Chat",
    link: "https://livechat.ufukogutcu.com",
    github: "https://github.com/ufukogutcu/live-chat",
    image: livechat,
    description: (
      <>
        This is a simple chat app made using sockets. Everyone can pick any
        username they want to chat with others that are online. No chat logs are
        stored.
      </>
    ),
    skills: ["python", "flask", "gcp"],
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
        This is a Bitcoin Bruteforcer script that can generate new bitcoin
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
        Both players play the same Sudoku board, trying to beat it together.
        <br />
        <br />
        VS:
        <br />
        Each player play their own Sudoku board, which are different boards with
        same difficulty levels. Players try to finish their board before the
        other player without getting three strikes and losing.
        <br />
        <br />
        VS with Sabotage:
        <br />
        This is the same as the VS gamemode with a little twist. Players can
        spend 30 seconds of their remaining time to sabotage the other player's
        board. Sabotaging blocks one chosen block(9 little squares) of the
        enemies board for a few seconds, preventing them from seeing the numbers
        of that block.
        <br />
        <br />
        The game is normally built for mobile platforms, but you can try out a
        WebGL version by clicking visit. Beware that the WebGL version doesn't
        work that well with mobile.
      </>
    ),
    skills: ["unity", "cs"],
  },
];

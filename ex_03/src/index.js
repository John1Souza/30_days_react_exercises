import React from "react";
import ReactDOM from "react-dom";
import asabeneh from "./image/Asabeneh.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const image = (
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  <div>
    <img src={asabeneh} alt="Asabeneth Image" />
  </div>
);
const author = (
  <h2>
    ASABENEH YETAYEH <BsCheckCircleFill className="bscheckcircle" />
  </h2>
);
const seniority = <p>Senior Developer, Finland</p>;
const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];
const skillsOrganized = skills.map((skill) => <p>{skill}</p>);

const joined = <p><AiOutlineClockCircle />Joined on Aug 30, 2020</p>

const app = (
  <div className="app">
    <div className="content_perfil">
      {image}
      {author}
      {seniority}
    </div>
    <h2>SKILLS</h2>
    <div className="skills">{skillsOrganized}</div>
    <footer>
      <div>
        {joined}
      </div>
    </footer>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);

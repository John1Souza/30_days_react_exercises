import React from "react";
import ReactDOM from "react-dom";
import img from './Image/img.jpg'
// import asabenehImage from './Image/Asabeneh.jpg'

// const welcome = "Welcome to 30 days of React";
// const title = "Getting Started React";
// const subtitle = "JavaScript Library";
// const author = {
//   firstName: "Asebeneh",
//   lastName: "Yetayeh",
// };

// const date = "Oct 2, 2020";

// const header = (
//   <header>
//     <div className="header-wrapper">
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>Instructor: {author.firstName} {author.lastName}</p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// );

// const numOne = 3;
// const numTwo = 2;

// const result = (
//   <p>
//     {numOne} + {numTwo} = {numOne + numTwo}
//   </p>
// );

// const yearBorn = 1820;
// const currentYear = new Date().getFullYear();
// const age = currentYear - yearBorn;
// const personAge = (
//   <p>
//     {" "}
//     {author.firstName} {author.lastName} is {age} years old
//   </p>
// );
// // JSX element, main

// const techs = ["HTML", "CSS", "JavaScript"];
// const techsFormatted = techs.map((tech) => <li>{tech}</li>);

// const user = (
//   <div>
//     <img src={asabenehImage} alt='asabeneh image' />
//   </div>
// )


// const main = (
//   <main>
//     <div className="main-wrapper">
//       <p>
//         Prerequisite to get started{" "}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>{techsFormatted}</ul>
//       {result}
//       {personAge}
//       {user}
//     </div>
//   </main>
// );

// const copyRight = "Copyright 2020";

// // JSX element, footer
// const footer = (
//   <footer>
//     <div className="footer-wrapper">
//       <p>{copyRight}</p>
//     </div>
//   </footer>
// );

// JSX element, app, a container or a parent
const image = (
  <div>
    <img src={img} alt='A image' />
  </div>
)
const app = (
  <div className="app">
    {image}
    {/* {main}
    {footer} */}
  </div>
);
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);

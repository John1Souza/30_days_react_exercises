import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
//Array of numbers
// const Numbers = ({numbers}) => {
//   const list = numbers.map((number) => <li>{number}</li>)
//   return list
// }

// Array of Arrays

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
//   ['Redux', 6],
//   ['Node', 5],
// ]
// const Skill = ({ skill : [tech, level]}) => (
//   <li>
//     {tech} {level}
//   </li>
// )
// const Skills = ({ skills }) => {

//     const skillsList = skills.map((skill) => <Skill skill={skill} />)
//     console.log(skillsList);
//     return <ul>{skillsList}</ul>
// }
// const App = () => {
 
//   return (
//     <div className="App">
//       <div>
//         <Skills skills={skills} />
//       </div>
//     </div>
//   );
// }

// Array of countries

// const countries = [
//   { name: 'Finland', city: 'Helsinki'},
//   { name: 'Sweden', city: 'Stockholm'},
//   { name: 'Denmark', city: 'Copenhagen'},
//   { name: 'Norway', city: 'Oslo'},
//   { name: 'Iceland', city: 'Reyjavik'},
// ]

// // Coountry component

// const Country = ({country :{name, city}}) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   )
// }

// // Countries component 

// const Countries = ({countries}) => {
//   const countryList = countries.map((country) => <Country country={country} />)
//   return <ul>{countryList}</ul>
// }
// const App = () => {
 
//   return (
//     <div className="App">
//       <div>
//         <Countries countries={countries} />
//       </div>
//     </div>
//   );
// }

// Keys in Mapping Arrays 

// const Numbers = ({ numbers }) => {
//   // modifying array to array of li JSX
//   const list = numbers.map((num) => <li key={num}>{num}</li>)
//   return list
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


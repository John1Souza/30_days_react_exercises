import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './Images/Asabeneh.jpg'
// String

// Header Component
// const Header = (props) => {
//   return (
//     <header>
//       <div className='header_wrapper'>
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>{props.firstName} {props.lastName}</p>
//         <smal>{props.date}</smal>
//       </div>
//     </header>
//   )
// }

// The App, or the parent or the container component
// Functional Component

// String

// const App = () => {
  //         const welcome = 'Seja bem vindo a 30 dias de React'
  //         const title = 'Getting Started React'
  //         const subtitle = 'JavaScript Library'
  //         const firstName = 'Asabeneh'
  //         const lastName = 'Yetayeh'
  //         const date= 'Oct 4, 2020'
  //   return (
    //     <div className='app'>
    //       <Header 
    //         welcome={welcome}
    //         title={title}
    //         subtitle={subtitle}
    //         firstName={firstName}
    //         lastName={lastName}
    //         date={date}
    //       />
    //     </div>
    //   )
    // }
    
    // Number


//     const Age = (props) => <div>The person is {props.age} years old.</div>
//     const Weight = (props) => (
//       <p>the weight of the object on earth is {props.weight} N.</p>
//     )
    
//     const App = () => {
//       let currentYear = 2020
//       let birthYear = 1820
//   const age = currentYear - birthYear
//   const gravity = 9.81
//   const mass = 75
//   return (
//     <div className='app'>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   )
// }

// Boolean 

// const Status = (props) => {
//   // Ternary operator to check the status of the person 
//   let status = props.status ? 'Old enough to drive' : 'Too young for driving'
//   return <p>{status}</p>
// }

// const App = () => {
//   let currentYear = 2020
//   let birthYear = 2000

//   const age = currentYear - birthYear // 15 years

//   let status = age >= 18

//   return (
//     <div className='app'>
//       <Status status={status} />
//     </div>
//   )
// }

// Array 

// const Skills = (props) => <ul>{props.skills}</ul>

// const App = () => (
//   <div>
//     <Skills skills={['HTML', 'CSS', 'JavaScript']} />
//   </div>
// )

// const Skills = (props) => {
//   // Modifying the skills array
//   const skillList = props.skills.map((skill) => <li>{skill}</li>)
//   return <ul>{skillList}</ul>
// }

// const App = () => (
//   <div className='app'>
//     <Skills skills={['HTML', 'CSS', 'JavaScript']} />
//   </div>
// )
// Object

// const Header = (props) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//       </div>
//     </header>
//   )
// }
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// Header Component

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.data.welcome}</h1>
//       <h2>{props.data.title}</h2>
//       <h3>{props.data.subtitle}</h3>
//       <p>
//         <small>{showDate(props.data.date)}</small>
//       </p>
//     </header>
//   )
// }
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 days of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asaneneh',
//       lastName: 'Yetayeh',
//     },
//     date: new Date(), // Date needs to be formatted to a human readable format
//   }

// Function Prop Types

// A button 

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const greetProple = () => {
//     alert('Welcome to 30 Days of React Challenge, 2020')
//   }
//   return (
//     <div className='app'>
//       <Button text='Greet People' onClick={greetProple}/>
//       <Button text='Show Time' onClick={() => alert(new Date())}/>
//     </div>
//   )
// }

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// // A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// const App = () => {
//   const handleTime = () => {
//     alert(showDate(new Date()))
//   }
//   const greetPeople = () => {
//     alert('Welcome to 30 Days of React Challenge, 2020')
//   }
//   return (
//     <div className='app'>
//       <Button text='Show time' onClick={handleTime} />
//       <Button text='Greet Prople' onClick={greetPeople} />
//     </div>
//   )
// }

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// // Header Component

// const Header = (props) => {
//   const data = props.data
//   const { welcome, title, subtitle, author, date } = data
//   const { firstName, lastName } = author

//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh'
//     },
//     date: new Date(),
//   }
//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// // Header Component

// const Header = (props) => {
//   const data = props.data
//   const { 
//     welcome, 
//     title,
//     subtitle, 
//     author: { firstName, lastName}, 
//     date 
//   } = data

//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh'
//     },
//     date: new Date(),
//   }
//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// Header Component

// const Header = ({
//   data: { 
//     welcome, 
//     title,
//     subtitle, 
//     author: { firstName, lastName}, 
//     date,
//     },
// }) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh'
//     },
//     date: new Date(),
//   }
//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

// Now, let's destructure all the components we had and assemble them together.

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date}, ${year}`
}

// Header Component

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapp'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList component

const TechList = ({techs}) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component

const UserCard = ({ user: {firstName, lastName, image} }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// a button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Main = ({ user, techs, greetPeople, handleTime }) => {
  return (
    <main>
      <div className='main-wrapper'>
        <p>Prerequisite to get Started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
        <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
      </div>
    </main>
  )
}

const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)


const App = () => {
  const data = {
    welcome : 'Welcome to 30 Days of React Challenge',
    title : 'Getting Started React',
    subtitle : 'JavaScript Library',
    author : { firstName: 'Asabeneh', lastName: 'Yeteyeh' },
    date : new Date(),
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  const user ={...data.author, image: asabenehImage}

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days of React Challenge, 2020')
  }
  return (
    <div className='app'>
      <Header data={data} />
      <Main user={user} techs={techs} handleTime={handleTime} greetPeople={greetPeople}/>
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
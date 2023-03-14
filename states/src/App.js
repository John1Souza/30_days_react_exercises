// index.js
import React from 'react'

import styles from './App.module.scss'


import AsabenehImg from './Images/Asabeneh.jpg'

/*export default class App extends React.Component {
  // declaring state
  state = {
    image: 'https://pixnio.com/free-images/2017/11/03/2017-11-03-23-14-56-850x560.jpg',
  }

  changeAnimal = () =>  {
    let catUrl =  'https://pixnio.com/free-images/2017/12/09/2017-12-09-12-17-21-850x838.jpg'
    let dogUrl = 'https://pixnio.com/free-images/2023/03/03/2023-03-03-15-01-52-850x850.jpg'

    let image = this.state.image === catUrl ? dogUrl : catUrl
    this.setState({image})
  }

  render() {
    // accessing the state value
    //const count = this.state.count
    return (
      <div style={{color: '#ffffff'}}className='App'>
        <h1>30 Days of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt="animal" />
        </div>
        <button onClick={this.changeAnimal}>
          Change
        </button>
        
      </div>
    )
  }
}
*/


// index.js
/*export default class App extends React.Component {
  // declaring state
  state = {
    image: 'https://images6.alphacoders.com/407/407838.jpg',
  }
  changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://images6.alphacoders.com/407/407838.jpg'
    let image = this.state.image === catURL ? dogURL : catURL
    this.setState({ image })
  }

  render() {
    // accessing the state value
    //const count = this.state.count
    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>

        <button onClick={this.changeAnimal} class='btn btn-add'>
          Change
        </button>
      </div>
    )
  }
}
*/

/*const showDate = (time) => {
  const months = [
    'January', 
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getYear()
  const date = time.getDate()
  return `${date} ${month}, ${year}`
}

// User Card Component

const UserCard = ({user : {firstName, lastName, image}}) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({text, onClick, style }) => (
  <buttton style={style} onClick={onClick}>
    {text}
  </buttton>
)

// CSS styles in JavaScript Object

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 19,
  color: 'white'
}

// class based component 

class Header extends React.Component {
  constructor(props){
    super(props)
    // the code inside the constructor run before any other code    
  }

  render () {
    console.log(this.props.data)
    const {
      welcome,
      title, 
      subtitle,
      author: {
        firstName,
        lastName
      },
      date
    } = this.props.data
    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Count = ({count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <button text='+1' onClick={addOne} style={buttonStyles} />
      <button text='-1' onClick={minusOne} style={buttonStyles} />

    </div>
  </div>
)


// TehcList Component
// class based component

class TehcList extends React.Component {
  constructor(props){
    super(props)
    // the code inside the constructor run before any other code    
  }
  render() {
    
    const {techs} = this.props
    const techFormated = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techFormated
  }
}

// Main Component 
// Class Component

class Main extends React.Component {
  constructor(props){
    super(props)
    // the code inside the constructor run before any other code    
  }

  render () {
    const {
    techs, 
    user, 
    greetPeople, 
    handleTime,
    changeBackground,
    count, 
    addOne, 
    minusOne
    } = this.props
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js</p>
          <ul>
            <TehcList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button 
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button 
            text='Show time'
            onClick={handleTime}
            style={buttonStyles}
          />
          <Button 
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component

class Footer extends React.Component {
  constructor(props){
    super(props)
    // the code inside the constructor run before any other code    
  }

  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
export default class App extends React.Component {

  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: ''
    },
  }

  showDate = (time) => {
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
    const year = time.getYear()
    const date = time.getDate()
    return `${date} ${month}, ${year}`
  }

  addOne = () => {
    this.setState({count: this.state.count + 1})
  }

  minusOne = () => {
    this.setState({count: this.state.count - 1})
  }

  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  greetPeople = () => {
    alert(`Welcome to 30 Days of React Challenge, 2023`)
  }

  changeBackground = () => {

  }
  render () {

    const data = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'John',
        lastName: 'Doe'
      }, date: 'March 10, 2023',
    }


    const techs = ['HTML', 'CSS', 'JavaScript']

    const date = new Date()

    // copying the author from data object to user variable using spread operator

    const user = {...data.author, image: AsabenehImg}
    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data}/>
        <Main 
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />

        <Footer date={new Date()} />

      </div>
    )
  }
}
*/


const showDate = (time) =>{
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
  'December'
]

const month = months[time.getMonth()].slice(0, 3)
const year = time.getYear()
const date = time.getDate()
return `${month} ${date}, ${year}`

}


// Header components
// a class based component 

class Header extends React.Component {
  constructor(props){
    super(props)
    // the code inside the constructor run before any other code    
  }
  
  render () {
    const {
      welcome,
      title, 
      subtitle,
      author: {
        firstName,
        lastName
      },
      date
    } = this.props.data
    return (
    <div className={styles.header_wrapper}>      
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
    </div>
    )
  }
}

export default class App extends React.Component {
  
  render () {
    const data = {
      welcome: 'Welcome to 30 Days of React Challenge, 2023',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'John',
        lastName: 'Doe'
      }, date: 'March 10, 2023',
    }
    return (
      <div className={styles.app}>
        <Header data={data}/>
      </div>
    )
  }
}



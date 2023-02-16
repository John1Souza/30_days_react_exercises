import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => {
  return <h1>{title}</h1>
}

const SubTitle = ({subtitle}) => {
  return (
    <h2>{subtitle}</h2>
  )
}

const InputFirstName = ({firstName : {type, id, name, placeholder}, style}) => {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} style={style}/>
  )
}

const InputLastName = ({lastName : {type, id, name, placeholder}, style}) => {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} style={style}/>
  )
}

const InputEmailAddress = ({emailAddress: {type, id, name, placeholder}, style}) => {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} style={style}/>
  )
}

const Button = ({ style, onClick, text}) => {
  return <button style={style} onClick={onClick}>{text}</button>
}
const inputDivStyle = {
  width: '70vw',
  display: 'flex',
  gap: 10,
  justifyContent: 'center',
  alignItems: 'center',  
  margin: 5,
  padding: '15px',
}
const inputStyle = { 
  width: '15vw', 
  color: '#c3c3c3',
  margin: 5,
  padding: '15px',
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
}
const buttonStyle = {  
  width: '25vw',
  backgroundColor: '#F37474',
  color: '#ffffff',
  margin: 5,
  padding: '15px',
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
  cursor: 'pointer', 
}

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const Main = ({onClick, firstName, lastName, emailAddress}) => {
  return (
    <div style={mainStyle}>
       <div style={inputDivStyle}>
         <InputFirstName style={inputStyle} firstName={firstName}/>
          <InputLastName style={inputStyle} lastName={lastName}/>
          <InputEmailAddress style={inputStyle} emailAddress={emailAddress}/>
       </div>
        <Button text='Subscribe' onClick={onClick} style={buttonStyle}/>
    </div>
  )
}

const appStyle = {
  height: '95vh',
  // fontSize: '1rem',
  backgroundColor: '#C2E6F4',
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
  padding: 20,
}

const App = () => {
  const subscribeTitle = 'SUBSCRIBE'
  const subTitle = 'Sign up with your email address to receive news and updates'
  const firstName = {
    type: 'text',
    id: 'fname',
    name: 'fname',
    placeholder: 'Insert name'
  }
  const lastName = {
    type: 'text',
    id: 'lname',
    name: 'lname',
    placeholder: 'Insert last name'
  }
  const emailAddress = {    
    type: 'text',
    id: 'femail',
    name: 'femail',
    placeholder: 'Insert your email address'
  }
  const onClick = () => {
    alert('Your subscribe is confirmed, welcome to the cat side')
  }
  return (
    <div style={appStyle}>
      <Title title={subscribeTitle}/>
      <SubTitle subtitle={subTitle} />
      <Main firstName={firstName} lastName={lastName} emailAddress={emailAddress} onClick={onClick}/>
    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
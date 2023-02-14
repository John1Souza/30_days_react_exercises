import React from "react";
import ReactDOM from 'react-dom';

// Hexadecimal color generator

// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i  = 0; i < 6; i++){
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }

// const HexaColor = () => <div>{hexaColor()}</div>

// const rootElement = document.getElementById('root')

// // we rende the App component using the reactDOM package

// ReactDOM.render(<HexaColor />, rootElement)

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const inputStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 0, 255)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => (<button style={buttonStyles}>Action</button>)

const InputField = () => {
  return (
    <div>
      <input type='text' id='finput' name='finput' placeholder="Click here" style={inputStyles} />
    </div>
  )
}

const AlertBox = () => {
  return (
    <>
      <div>
        <p>This is a warning alert box</p>
      </div>
      <div>
        <p>This is a success alert box</p>
      </div>
    </>
  )
}


const app = (
  <div className="app">
    <Button />
    <InputField />
    <AlertBox />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)
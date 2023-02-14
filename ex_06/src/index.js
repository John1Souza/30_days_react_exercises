import React from "react";
import ReactDOM from "react-dom";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index]
  }
  return "#" + color
}

const color = (hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor())

const colorSelector = () => {
  let colorAtt
  for (let i = 0; i < color.length; i++){
    colorAtt = color[i]
  }
  return colorAtt
}
const 

const HexaColor = () => {
  return (
  <div>
    <div className='hexa_color' style={{backgroundColor: `${colorAtt}`}}>{colorAtt}</div>
  </div>
  )
}

const App = () => (
  <div >
    <HexaColor/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

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


const HexaColor = () => {
  const divs = []
  for (let i = 0; i< 5; i++){
    let color = hexaColor()
    divs.push(<div className="hexa_color" style={{ backgroundColor: `${color}` }}>{color}</div>)
  }
  return (
  <>
    {divs}
  </>
  )
}

const App = () => (
  <div >
    <HexaColor/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

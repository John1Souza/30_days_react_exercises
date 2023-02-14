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
};

const divStyles = {
  backgroundColor: `${hexaColor()}`,
  color: "#fff",
  margin: "10px",
  padding: "10px 20px",
}

const HexaColor = () => {
  return (
  <div>{hexaColor()}</div>
  )
}

const App = () => (
  <div>
    <div style={divStyles}><HexaColor/></div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

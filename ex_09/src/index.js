import React from "react";
import ReactDOM from "react-dom";

const inputFirstName = (
  <input type="text" id="fname" name="fname" placeholder="First Name" />
);
const inputLastName = (
  <input type="text" id="lname" name="lname" placeholder="Last Name" />
);
const inputEmailAddress = (
  <input id="emailAddress" type="email" placeholder="Email" />
);

const button = <button type="submit">Subscribe</button>;

const app = (
  <div className="app">
    <div className="app-wrapper-content">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="input-wrapper">
        {inputFirstName}
        {inputLastName}
        {inputEmailAddress}
      </div>
      {button}
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);

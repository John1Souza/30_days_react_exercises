import React from 'react';
import ReactDOM from 'react-dom';

const InputName = () => (<input type='text' id='fname' name='fname' placeholder='First name' />)
const LastName = () => (<input type='text' id='lname' name='lname' placeholder='Last name' />)
const EmailAddress = () => (<input type='text' id='fname' name='fname' placeholder='Email Address' />)

const Button = () => (
  <button type='submit'>Subscribe</button>
)

const App = () => (
  <div className='app'>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div className='input_container'>
      <InputName />
      <LastName />
      <EmailAddress />
    </div>    
    <Button />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
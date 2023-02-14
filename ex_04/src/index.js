import React from 'react';
import ReactDOM from 'react-dom';
import html from './Images/html.png'
import css from './Images/css.png'
import reactpng from './Images/react.png'
import js from './Images/js.png'

// eslint-disable-next-line jsx-a11y/img-redundant-alt
const Html = () => (<img src={html} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const Css = () => (<img src={css} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const JS = () => (<img src={js} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const ReactPng = () => (<img src={reactpng} alt='html image'/>)

const App = () => (
  <div className='app'>
    <h1>Front End Technologies</h1>
    <div className='front_end_tech'>
      <Html />
      <Css />
      <JS />
      <ReactPng />
    </div>
  </div>
)



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
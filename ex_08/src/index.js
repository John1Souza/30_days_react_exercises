import React from 'react';
import ReactDOM from 'react-dom';
import htmlImg from './Images/html.png'
import cssImg from './Images/css.png'
import reactpng from './Images/react.png'
import jsImg from './Images/js.png'

// eslint-disable-next-line jsx-a11y/img-redundant-alt
const Html = ({ htmlImage }) => (<img src={htmlImage} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const Css = ({ cssImage}) => (<img src={cssImage} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const JS = ({ jsImage }) => (<img src={jsImage} alt='html image'/>)
// eslint-disable-next-line jsx-a11y/img-redundant-alt
const ReactPng = ({ reactImage }) => (<img src={reactImage} alt='html image'/>)

const Title = ({ title }) => (<h1>{title}</h1>)
  
const App = () => {

  const title = 'Front End Technologies'
  const htmlImage = htmlImg
  const cssImage = cssImg
  const jsImage = jsImg
  const reactImage = reactpng

  return (
    <div className='app'>
      <Title title={title}/>
      <div className='front_end_tech'>
        <Html htmlImage={htmlImage}/>
        <Css cssImage={cssImage}/>
        <JS jsImage={jsImage}/>
        <ReactPng reactImage={reactImage}/>
      </div>
    </div>
  )
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
import React from 'react';
import ReactDOM from 'react-dom';
import asabeneh from './Images/Asabeneh.jpg'
import {AiFillCheckCircle, AiOutlineClockCircle} from 'react-icons/ai'


const Asa = () => <div><img id='asabeneh_img' src={asabeneh} alt='Asa'/></div>

const AsaName = () => <h1>Asabeneh Yetayeh {<AiFillCheckCircle style={{color: '2acfcf'}}/>}</h1>

const AsaSeniority = () => <p>Senior Developer, Finland</p>

const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
]

const SkillsMap = () => ( skills.map((skill) => <p style={{fontSize: '1.2rem', backgroundColor: '#2acfcf', color: '#fff', margin: '10px', padding:'15px', borderRadius: '8px'}}>{skill}</p>) )

const Joined = () => (<p>{<AiOutlineClockCircle />}Joined on Aug 30, 2020</p>)

const App = () => {
  return (
    <div className='app'>
      <Asa />
      <AsaName />
      <AsaSeniority className='asa_seniority'/>
      <h1>SKILLS</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '10px', padding:'20px'}}>
        <SkillsMap />
      </div>
      <Joined />
    </div>
  )
}

const rootElment = document.getElementById('root')
ReactDOM.render(<App />, rootElment)
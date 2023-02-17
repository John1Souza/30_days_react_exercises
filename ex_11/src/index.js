import React from "react";
import ReactDOM from 'react-dom';
import { ImClock} from 'react-icons/im'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import asabeneh from './Images/Asabeneh.jpg'

const UserCard = ({name, seniority, asaImage, alt, style, }) => {
  return (
    <div style={style}>
      <img style={{width: '350px', borderRadius: '50%', margin: 5, padding: 15}}src={asaImage} alt={alt} />
      <h1 style={{fontWeight: 'bold', padding: 20, paddingLeft: 0,  margin: 10, marginLeft: 0,}}>{name}<BsFillCheckCircleFill style={{ color: '#2acfcf'}}/></h1>
      <h2 style={{fontSize: '1.6rem', fontWeight: 'lighter', padding: 20, margin: 10}}>{seniority}</h2>
    </div>
  )
}


const Skills = ({skills, style}) => {
  const skillsSet = skills.map((skill) => <p style={{fontSize: '1.4rem', backgroundColor: '#2ACFCF', color: '#fff', padding: 10, borderRadius: 8,}}>{skill}</p>)

  return (
    <div>
      <div style={style}>{skillsSet}</div>
    </div>
  )
}

const skillsStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 15,
  margin: 15,
  padding: 20,

}
const Main = ({styleMain, style, nameMain, seniorityMain, image, altMain, mainSkills, skillsStyle}) => {
  return (
    <div style={styleMain}>
      <UserCard 
      style={style} 
      name={nameMain} 
      seniority={seniorityMain} 
      asaImage={image} 
      alt={altMain} />      
      <h1>SKILLS</h1>
      <Skills style={skillsStyle} skills={mainSkills}/>
    </div>
  )
}


const appStyle = {
  backgroundColor: '#ffffff',
  margin: '15px',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column'
}
const App = () => {
  const image = asabeneh
  const mainSkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
  const altMain = 'Asabeneh'
  const nameMain = 'ASABENEH YETAYEH'
  const seniorityMain = 'Senior Developer, Finland'
  return (
    <div style={appStyle}>    
      <Main 
        image={image} 
        mainSkills={mainSkills} 
        altMain={altMain}
        nameMain={nameMain}
        seniorityMain={seniorityMain}
        skillsStyle={skillsStyle}
      />
      <h2 style={{fontWeight: 'lighter'}}><ImClock />Joined on Aug 30, 2020</h2>
    </div>
  )
  
}
  

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
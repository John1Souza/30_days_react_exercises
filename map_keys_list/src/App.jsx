import { Exercise03 } from "./components/Exercise03/Exercise03";
import { Exercise01 } from "./components/Exercises/Exercise01";
import { Exercise02 } from "./components/Exercises02/Exercise02";

const hexaColorsGen = () => {
  let hexaColor = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++) {
      let hex = Math.floor(Math.random() * hexaColor.length);
      color += hexaColor[hex]
    }
    return `#${color}`
}
 
const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]



export function App() {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 
    8, 9, 10, 11, 12, 13,14,
    15, 16, 17,18, 19, 20, 21, 
    22,23,24,25,26,27,28,29,30, 
    31
  ]
  return (
    <>
        <Exercise01 numbers={numbers} />
        <Exercise02 numbers={numbers} hexaColors={hexaColorsGen} />
        <Exercise03  tenHighestPopulation={tenHighestPopulation}/>
    </>
  )
}

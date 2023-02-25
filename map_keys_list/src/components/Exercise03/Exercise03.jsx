import styles from './Exercise03.module.scss'

export function Exercise03({tenHighestPopulation}) {
  
  return (
    <div className={styles.population_container}>
      <h1>30 Days of React</h1>
      <h2>World Population</h2>
      <small>Ten most populated countries</small>
      
      <div className={styles.countries_container}>
        {tenHighestPopulation.map((item) => {


      
          let popReduce = item.population/10000000


          return (
              <>
                <h2 key={item.country}>{item.country.toUpperCase()}</h2>
                <div style={{width: `${popReduce}px`, backgroundColor: '#FFA500', height: '2rem', margin: '1rem', padding: '.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0 .5rem .5rem 0'}}> 
                 
                </div>
                <h2> {item.population.toLocaleString()}</h2>
              </>
              )
            }
            )}
      </div>              
      
    </div>
  )
}

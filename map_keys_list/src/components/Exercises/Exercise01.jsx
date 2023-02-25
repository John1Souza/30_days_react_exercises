import styles from "./Exercise01.module.scss";

export function Exercise01(props) {
  return (
    <div className={styles.container}>
      <h1>30 days of React</h1>
      <h2>Number Generator</h2>
      <table className={styles.table_container}>
        <tbody>
          <tr>
            {
                props.numbers.map(
                    (numb) => {
                        if (numb === 2 ||  numb === 3 || numb === 5 || numb === 7 || numb === 11 || numb === 13 || numb === 17 || numb === 19 || numb === 23 || numb === 29 || numb === 31){
                            return <td className={styles.primeNumber} key={numb}>{numb}</td>
                        }
                        if (numb % 2 === 0) {
                            return <td className={styles.evenNumber} key={numb}>{numb}</td>
                        } else { 
                            return <td className={styles.oddNumber} key={numb}>{numb}</td>
                        }                         
                    }
                )
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

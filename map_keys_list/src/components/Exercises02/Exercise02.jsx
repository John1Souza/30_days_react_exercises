import styles from "./Exercise02.module.scss";

export function Exercise02(props) {
  return (
    <div className={styles.container}>
      <h1>30 days of React</h1>
      <h2>Hexadecimal Colors</h2>
      <table className={styles.table_container_ex_02} >
        <tbody>
          <tr>
            {props.numbers.map((numb) => {
              let hexColor = props.hexaColors();
              return (
                <td
                  key={numb}
                  style={{
                    backgroundColor: `${hexColor}`,
                  }}
                >
                  {hexColor}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

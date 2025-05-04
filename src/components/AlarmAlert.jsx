import styles from "@/styles/popUpBox.module.css"

function AlarmAlert({setTimesUp}){
  return(
    <div className={styles.modalBox}>
      <div className={styles.dialogBox}>
        <h3 className={styles.boxText}>Your working time is up!</h3>
        <h3 className={styles.boxText}>Let's take a break</h3>
        <input className={styles.okButton} type="button" value="OK" onClick={()=> setTimesUp(false)} />
      </div>
    </div>
  );
}

export default AlarmAlert;
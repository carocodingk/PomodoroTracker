import styles from "@/styles/popUpBox.module.css"

function ErrorMessage({setShowErrorMsg}){
  return(
    <div className={styles.modalBox}>
      <div className={styles.dialogBox}>
        <h3 className={styles.boxText}>Error! The task you are trying to enter is empty!</h3>
        <input className={styles.okButton}
          type="button" value='OK!' onClick={() => setShowErrorMsg(false)} />
      </div>
    </div>
  );
}

export default ErrorMessage;
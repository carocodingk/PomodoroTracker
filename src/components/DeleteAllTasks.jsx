import styles from "@/styles/popUpBox.module.css"

function DeleteAllTask({setShowDeleteAll, setTaskList, setNewTask}){

  const deleteAllTask = ()=>{
    setTaskList([])
    setNewTask({
      taskName:'',
      expectedCycles: 1
    })
    setShowDeleteAll(false)
  }

  return(
    <div className={styles.modalBox}>
      <div className={styles.dialogBox}>
        <p className={styles.boxText}>Would you like to delete all tasks?</p>
        <div>
          <input className={styles.okButton1} type="button" value="YES!" onClick={()=>deleteAllTask()} />
          <input className={styles.okButton1} type="button" value="NO" onClick={()=>setShowDeleteAll(false)} />
        </div>
      </div>
    </div>
  );
}

export default DeleteAllTask;
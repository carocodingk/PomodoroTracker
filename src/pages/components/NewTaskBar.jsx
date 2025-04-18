import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import styles from "@/styles/NewTaskBar.module.css"

function NewTaskBar({nextTaskKey, setNextTaskKey, setTaskList}){
  const [newTask, setNewTask] = useState({
    taskName:'',
    expectedCycles: 1
  });
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const taskVerification = () => {
  // check new task description is not empty
    if (newTask.taskName.length > 0){
      setTaskList((prevTaskList) => ([
        ...prevTaskList, {
          key: nextTaskKey,
          taskName: newTask.taskName,
          expectedCycles: Number(newTask.expectedCycles),
          actualTime: 0,
          finished: false
        }
      ]))
      setNextTaskKey(nextTaskKey+1)
    }
    else {
      setShowErrorMsg(true)
    }
    setNewTask({
      taskName:'',
      expectedCycles: 1
    })
  }

  const deleteAllTask = ()=>{
    setTaskList([])
    setNewTask({
      taskName:'',
      expectedCycles: 1
    })
  }

  return(
    <div>
      {showErrorMsg && <ErrorMessage setShowErrorMsg={setShowErrorMsg} />}
      <div id={styles.newTaskBar}>
        <input id={styles.newTaskDesc} type="text" value={newTask.taskName} onChange={
          (e) => 
            setNewTask((prevState) => ({
              ...prevState,
              taskName: e.target.value
            }))
          }
        />
        <input id={styles.taskCycle} type="number" value={newTask.expectedCycles} min='1' onChange={
          (e) => 
            setNewTask((prevState) => ({
              ...prevState,
              expectedCycles: e.target.value
            }))
        }/>
        <div className={styles.taskButton} onClick={() => taskVerification()}>
          <IoMdAdd />
        </div>
        <div className={styles.taskButton} onClick={() => deleteAllTask()}>
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  );
}

export default NewTaskBar;
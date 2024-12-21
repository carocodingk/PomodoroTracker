import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

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
      console.log('Description is empty')
      setShowErrorMsg(true)
    }
  }

  return(
    <div>
      {showErrorMsg && <ErrorMessage setShowErrorMsg={setShowErrorMsg} />}
      <input type="text" onChange={
        (e) => 
          setNewTask((prevState) => ({
            ...prevState,
            taskName: e.target.value
          }))
        }
      />
      <input type="number" onChange={
        (e) => 
          setNewTask((prevState) => ({
            ...prevState,
            expectedCycles: e.target.value
          }))
      }/>
      <input type="button" value='+' onClick={() => taskVerification()}/>
      <input type="button" value='Delete all tasks' onClick={() => setTaskList([])} />
    </div>
  );
}

export default NewTaskBar;
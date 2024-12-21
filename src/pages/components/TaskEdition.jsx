import { useState } from "react";

function TaskEdition({taskSelected, taskList, setTaskList, setEditTask}){
  let [editedTask, setEditedTask] = useState(taskSelected) 

  const saveChanges = () => {
    let editedTaskList = taskList.map((task)=>{
      if (task.key === taskSelected.key)
        return editedTask
      else
        return task
    })
    setTaskList(editedTaskList)
    console.log('new task list ', taskList)
  }

  return(
    <div>
      <>
        Description:
        <input type="text" value={editedTask.taskName} onChange={
          (e)=>
            setEditedTask((prevState) => ({
              ...prevState,
              taskName: e.target.value
          }))
        }/>
      </>
      <>
        Expected Number of Cycles:
        <input type="number" value={editedTask.expectedCycles} onChange={
          (e)=>(
            setEditedTask((prevState) => ({
              ...prevState,
              expectedCycles: Number(e.target.value)
            }))
          )
        }/>
      </>
      <>
        Current Time:
        <input type="number" value={editedTask.actualTime} onChange={
          (e)=>(
            setEditedTask((prevState) => ({
              ...prevState,
              actualTime: Number(e.target.value)
            }))
          )
        }/>
      </>
      <>
        Finished:
        <input type="checkbox" checked={editedTask.finished} onClick={
          (e) => (
            // console.log('checkbox ', !e.target.checked)
            setEditedTask((prevState) => ({
              ...prevState,
              finished: e.target.checked
            }))
          )
        }/>
      </>
      <>      
        <input type="button" value='Save' onClick={()=>saveChanges()} />
        <input type="button" value='Cancel' onClick={()=>setEditTask(false)} />
      </>
      {console.log('EDITED TASK: ', editedTask)}
    </div>
  );
}

export default TaskEdition;
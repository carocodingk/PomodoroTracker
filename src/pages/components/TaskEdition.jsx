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
    setEditTask(false)
  }

  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div className="dialogBox flexBox flexColumn">
        <div className="flexBox flexColumn flexJustifySpaceBetween editTaskField"> 
          <p>Description:</p>
          <input type="text" value={editedTask.taskName} onChange={
            (e)=>
              setEditedTask((prevState) => ({
                ...prevState,
                taskName: e.target.value
            }))
          }/>
        </div>
        <div className="flexBox flexJustifySpaceBetween editTaskField">
          <p>Expected Number of Cycles:</p>
          <input className="editTaskNumber" type="number" value={editedTask.expectedCycles} onChange={
            (e)=>(
              setEditedTask((prevState) => ({
                ...prevState,
                expectedCycles: Number(e.target.value)
              }))
            )
          }/>
        </div>
        <div className="flexBox flexJustifySpaceBetween editTaskField">
          <p>Current Time:</p>
          <input className="editTaskNumber" type="number" value={editedTask.actualTime} onChange={
            (e)=>(
              setEditedTask((prevState) => ({
                ...prevState,
                actualTime: Number(e.target.value)
              }))
            )
          }/>
        </div>
        <div className="flexBox flexJustifySpaceBetween editTaskField">
          <p>Finished:</p>
          <input className="editTaskNumber" type="checkbox" checked={editedTask.finished} onClick={
            (e) => (
              // console.log('checkbox ', !e.target.checked)
              setEditedTask((prevState) => ({
                ...prevState,
                finished: e.target.checked
              }))
            )
          }/>
        </div>
        <div className="flexBox flexJustifyCenter">      
          <input className="timerButton hoverItem" type="button" value='Save' onClick={()=>saveChanges()} />
          <input className="timerButton hoverItem" type="button" value='Cancel' onClick={()=>setEditTask(false)} />
        </div>
        {/* {console.log('EDITED TASK: ', editedTask)} */}
      </div>
    </div>  
  );
}

export default TaskEdition;
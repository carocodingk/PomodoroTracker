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
    setEditTask(false)
    setTaskList(editedTaskList)
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
          <div id="editTimeBar" className="flexBox flexJustifySpaceBetween">
            <input className="editTime" type="number" min={'0'} max={'99'} value={Math.floor(editedTask.actualTime/3600)} onChange={
              (e)=>{
                //total time minus the portion in hours
                const timeExceptHours = editedTask.actualTime - (Math.floor(editedTask.actualTime/3600)*3600)
                setEditedTask((prevState) => ({
                  ...prevState, 
                  actualTime: timeExceptHours + (Number(e.target.value) * 3600)
                }))
              }
            }/>h
            <input className="editTime" type="number" min={'0'} value={Math.floor((editedTask.actualTime%3600)/60)} max={'59'} onChange={
              (e)=>{
                //total time minus the portion in minutes
                const timeExceptMinutes = editedTask.actualTime - (Math.floor((editedTask.actualTime % 3600)/60) * 60)
                setEditedTask((prevState) => ({
                  ...prevState,
                  actualTime: timeExceptMinutes + (Number(e.target.value) * 60)
                }))
              }
            }/>m
            <input className="editTime" type="number" min={'0'} value={(editedTask.actualTime%3600)%60} max={'59'} onChange={
              (e)=>{
                const timeExceptSeconds = editedTask.actualTime - ((editedTask.actualTime%3600)%60)
                setEditedTask((prevState) => ({
                  ...prevState,
                  actualTime: timeExceptSeconds + Number(e.target.value)
                }))
              }
            }/>s
          </div>
        </div>
        <div className="flexBox flexJustifySpaceBetween editTaskField">
          <p>Finished:</p>
          <input className="editTaskNumber" type="checkbox" checked={editedTask.finished} onClick={
            (e) => (
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
      </div>
    </div>  
  );
}

export default TaskEdition;
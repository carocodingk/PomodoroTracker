import { useState } from "react";
// import styles from "@/styles/TaskEdition.module.css"

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
    <div className='modalBox'>
      <div className='dialogBox_med'>
        <div> 
          <p>Description:</p>
          <input id='input1' type="text" value={editedTask.taskName} onChange={
            (e)=>
              setEditedTask((prevState) => ({
                ...prevState,
                taskName: e.target.value
            }))
          }/>
        </div>
        <div className='flexBox'>
          <p>Expected Number of Cycles:</p>
          <input id='input2' type="number" min={'0'} max={'99'}  value={editedTask.expectedCycles} onChange={
            (e)=>(
              setEditedTask((prevState) => ({
                ...prevState,
                expectedCycles: Number(e.target.value)
              }))
            )
          }/>
        </div>
        <div className='flexBox'>
          <p>Current Time:</p>
          <div>
            <input className='input3' type="number" min={'0'} max={'99'} value={Math.floor(editedTask.actualTime/3600)} onChange={
              (e)=>{
                //total time minus the portion in hours
                const timeExceptHours = editedTask.actualTime - (Math.floor(editedTask.actualTime/3600)*3600)
                setEditedTask((prevState) => ({
                  ...prevState, 
                  actualTime: timeExceptHours + (Number(e.target.value) * 3600)
                }))
              }
            }/>:
            <input className='input3' type="number" min={'0'} value={Math.floor((editedTask.actualTime%3600)/60)} max={'59'} onChange={
              (e)=>{
                //total time minus the portion in minutes
                const timeExceptMinutes = editedTask.actualTime - (Math.floor((editedTask.actualTime % 3600)/60) * 60)
                setEditedTask((prevState) => ({
                  ...prevState,
                  actualTime: timeExceptMinutes + (Number(e.target.value) * 60)
                }))
              }
            }/>:
            <input className='input3' type="number" min={'0'} value={(editedTask.actualTime%3600)%60} max={'59'} onChange={
              (e)=>{
                const timeExceptSeconds = editedTask.actualTime - ((editedTask.actualTime%3600)%60)
                setEditedTask((prevState) => ({
                  ...prevState,
                  actualTime: timeExceptSeconds + Number(e.target.value)
                }))
              }
            }/>
          </div>
        </div>
        <div className='flexBox'>
          <p>Finished:</p>
          <input type="checkbox" checked={editedTask.finished} onClick={
            (e) => (
              setEditedTask((prevState) => ({
                ...prevState,
                finished: e.target.checked
              }))
            )
          }/>
        </div>
        <div className='flexBox1'>      
          <input className='okButton' type="button" value='Save' onClick={()=>saveChanges()} />
          <input className='okButton' type="button" value='Cancel' onClick={()=>setEditTask(false)} />
        </div>
      </div>
    </div>  
  );
}

export default TaskEdition;
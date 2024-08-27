import { useEffect, useState } from "react"
import ShowTask from "./showTask"

function EditMenu({taskList, setTaskList, setEditModeOption, taskToEdit, setShowDetails, showDetails}){


  
  const removeAll = () => {
    const newTaskList =[]
    setTaskList(newTaskList)
  }

  const removeTask = () => {
    let newTaskList = []
    setEditModeOption(2)
    return(
      <div>
        {taskList.map((task) =>
          (task.key != taskToEdit.key)?
            newTaskList = [...newTaskList, task]
            :
            console.log('removed task: ', task.taskName)
        )}
        {setTaskList(newTaskList)}
      </div>  
    );
  }

  const editTask = () => {
    console.log('before ', showDetails);
    setShowDetails(!showDetails)
    console.log('after ', showDetails)
  }

  return(
    <div>
      <ul>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Edit a task" onClick={()=>editTask()}/></li>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Remove a task" onClick={()=>removeTask()}/></li>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Remove all" onClick={()=> removeAll()}/></li>
      </ul>
      {console.log('at the end ', showDetails)}
    </div>
    );
}

export default EditMenu;
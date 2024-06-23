import { useEffect, useState } from "react"
import DialogBox from "./dialogBox"
import ShowTask from "./showTask"

function EditMenu({taskList, setTaskList, setEditModeOption, taskToEdit, setOpenMenu}){

  const [showDetails, setShowDetails] = useState(false);
  
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
    return(
    setOpenMenu(false)
    );

  }

    return(
    <div>
      {showDetails && <ShowTask taskList={taskList} taskToEdit={taskToEdit} />}
      {/* <ul onMouseEnter={() => setOpenMenu(true)} onMouseLeave={()=> setOpenMenu(false)}> */}
      <ul>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Edit a task" onClick={()=> editTask()}/></li>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Remove a task" onClick={()=>removeTask()}/></li>
        <li><input type="button" className="borderless lightBackground menuButton hoverItem" value="Remove all" onClick={()=> removeAll()}/></li>
      </ul>
    </div>
    );
}

export default EditMenu;
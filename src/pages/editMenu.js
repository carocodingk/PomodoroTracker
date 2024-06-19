import { useEffect } from "react"

function EditMenu({taskList, setTaskList, setEditModeOption, editTask}){
  
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
          (task.key != editTask.key)?
            // console.log(task.taskName)
            newTaskList = [...newTaskList, task]
            :
            console.log('removed task: ', task.taskName)
        )}
        {setTaskList(newTaskList)}
      </div>
      
    );
  }




    return(
    <ul>
      <li><input type="button" value="Edit a task" onClick={()=>console.log("first")}/></li>
      <li><input type="button" value="Remove a task" onClick={()=>removeTask()}/></li>
      <li><input type="button" value="Remove all" onClick={()=> removeAll()}/></li>
    </ul>
    );
}

export default EditMenu;
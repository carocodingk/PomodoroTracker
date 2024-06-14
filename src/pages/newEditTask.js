import { useState } from "react"
// import EditMenu from "./editMenu"
// import EditMenu from "./editMenu"

function NewEditTask({taskKeys, setTaskKey, setTaskList, openMenu, setOpenMenu}){
    const [newTask, setNewTask] = useState({
      taskName: "", 
      expectedCycles: "", 
    })

    // const [openMenu, setOpenMenu] = useState(false)
  
    //  Verifies if the input entered by user are valid: task description is not empty and 
    //  assigns a default of 1 to expected number of cycles when not specified
    const inputVerification = () => {
      if (newTask.taskName.length > 0){
        if (newTask.expectedCycles.length >0){
          setTaskList((prevTaskList) => ([
            ...prevTaskList, {
              key: taskKeys,
              taskName: newTask.taskName,
              expectedCycles: newTask.expectedCycles,
              actualTime: 0,
              finished: false
            }
          ]))
        }
        else{
          setTaskList((prevTaskList) => ([
            ...prevTaskList, {
              key: taskKeys,
              taskName: newTask.taskName,
              expectedCycles: 1,
              actualTime: 0,
              finished: false
            }
          ]))
        }
      }
      else
        console.log('Please enter a task!')
      setTaskKey((prevTaskKey) => prevTaskKey+1)  //Updates the key manager
      setNewTask({                                //Resets the input field to blank
        taskName: "",
        expectedCycles: ""
      })
    }
  
    return(
      <div id="taskInput" className="flexBox flexRow flexJustifyCenter">
        {/* Task description field */}
        <div className="flexBox flexColumn">
          <input id="newTaskInput" 
            type="text" onChange={
              (e) => 
                setNewTask((prevState) => ({
                  ...prevState, 
                  taskName: e.target.value
                })
              )}
              value={newTask.taskName}
          />
        </div>
        {/* Task expected cycles field */}
        <div className="flexBox flexColumn">
          <input id="newCycleInput" type="text" onChange={
            (e) => 
              setNewTask((prevState) => ({
                ...prevState,
                expectedCycles: e.target.value
              }))
            }
            value={newTask.expectedCycles}
          />
        </div>
        {/* Add to list button */}
        <input id="newTaskButton" className="brown"
          type="button" value="+" onClick={()=> {  
            inputVerification()
          }
        }/>  
        <input type="button" value="EDIT" onClick={() => setOpenMenu(!openMenu)} />
        {/* <EditMenu /> */}
        {/* <input type="button" value="Edit" onClick={() => setOpenMenu(!openMenu)} />   s  */}
      </div>
    );
  }

  export default NewEditTask;
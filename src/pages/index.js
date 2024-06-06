import { useState } from "react";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 0, finished: true}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false} ];


function TaskManager({taskInProgress, setTaskInProgress, cycleComplete}){
  const [taskKeys, setTaskKey] = useState(2)
  const [taskList, setTaskList] = useState(initialTasks)
  console.log(taskList)

  const chooseTask = (task) => {
    if (!task.finished){
      setTaskInProgress({
        key: task.key,
        taskName: task.taskName
      })
    }
    else{
      console.log("This task has been resolved")
    }
  }

  return(
    <div>
      <ul>
        {taskList.map((task) => (
          <li>
            <input type="checkbox" checked={task.finished} />
            <input type="button" value={task.taskName} onClick={()=>chooseTask(task)}/>
            #### {task.expectedCycles} 
            #### {task.actualTime}
          </li>
        ))}
      </ul>
      <NewTask taskKeys={taskKeys} setTaskKey={setTaskKey} setTaskList={setTaskList} />
      {cycleComplete && <TaskCompletion taskInProgress={taskInProgress} taskList={taskList} setTaskList={setTaskList}/>}
      {console.log('inside task manager ', taskInProgress.taskName)}
    </div>
  );
}

function TaskCompletion({taskInProgress, taskList, setTaskList}){

  const updateTaskInProgress = (completed) => {
    let updatedTask
    taskList.map((task) => {
      if (task.key === taskInProgress.key){
        if (completed){
          console.log('task completed')
          updatedTask = {
            ...task,
            actualTime: task.actualTime + workTime,
            finished: completed
          }
        }
        else{
          console.log('task not completed')
          updatedTask = {
            ...task,
            actualTime: task.actualTime + workTime
          }
        }
      }
    })
    const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)
    setTaskList(updatedTaskList)
  }

  return(
    <div>
      {console.log('here ', taskInProgress)}
      <h2>{`Have you finished with task: ${taskInProgress.taskName}?`}</h2>
      <input type="button" value="YES" onClick={()=>updateTaskInProgress(true)} />
      <input type="button" value="NO" onClick={()=>updateTaskInProgress(false)}/>
      {console.log('theeeree', taskInProgress.taskName)}
    </div>
  );
}

function NewTask({taskKeys, setTaskKey, setTaskList}){
  const [newTask, setNewTask] = useState({
    taskName: "", 
    expectedCycles: "", 
  })

  //  Verifies if the input entered by user are valid: task description is not empty and 
  //  assigns a default of 1 to expected number of cycles when not specified
  const inputVerification = () => {
    console.log(newTask)
    if (newTask.taskName.length > 0){
      console.log('greater than zero')
      if (newTask.expectedCycles.length >0){
        console.log('expected greater than zero')
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
        console.log('expected is lesser or equal than zero')
        setTaskList((prevTaskList) => ([
          ...prevTaskList, {
            key: taskKeys,
            taskName: newTask.taskName,
            expectedCycles: 1,
            actualTime: 0,
            finished: false
          }
        ]))
        console.log("another checkpoint")
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
    <div className="flexBox flexRow">
      {/* Task description field */}
      <div className="flexBox flexColumn">
        <label>Task description: </label>
        <input type="text" onChange={
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
        <label>Expected Cycles:</label>
        <input type="text" onChange={
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
      <input type="button" value="+" onClick={()=> {  
        inputVerification()
        console.log("submit new task")
      }
      }/>      
    </div>
    
  );
}

export default function Home() {
  const [taskInProgress, setTaskInProgress] = useState({
    key: -1,
    taskName: ""
  })
  const [cycleComplete, setCycleComplete] = useState(true) //state indicates when a pomodoro cycle has been completed

  console.log('first ', taskInProgress)

  return (
    <div>
      <TaskManager taskInProgress={taskInProgress} setTaskInProgress={setTaskInProgress} cycleComplete={cycleComplete}/>
    </div>
  );
}

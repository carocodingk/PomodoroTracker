import { useEffect, useState } from "react";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 0, finished: true}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false} ];

function PomodoroTimer({taskInProgress, setCycleComplete, checkedTask}){
  const [workTimer, setWorkTimer] = useState(workTime);
  const [workTimerRun, setWorkTimerRun] = useState(false);
  const [breakTimer, setBreakTimer] = useState(breakTime);
  const [breakTimerRun, setBreakTimerRun] = useState(false);

  const startTimer = (taskInProgress) => {
    setCycleComplete(false) //Restart the cycle
    if (taskInProgress.key != -1){
      console.log('setworktimer')
      
      setWorkTimerRun(!workTimerRun)
    }
    else
      console.log("Please select a task to work on! ")
  }

  useEffect(() => {
    let timer1, timer2
    if (workTimerRun){
      console.log('case1')
      timer1 = setTimeout(() => {
        setWorkTimer((prevTime) => prevTime-1)
      }, 1000);
      if (workTimer === 0){ //time's up
        setWorkTimerRun(false) //Stop work timer
        setBreakTimerRun(true) //Start break timer
      }
    }
    
    if (breakTimerRun){
      timer2 = setTimeout(() => {
        setBreakTimer((prevTime) => prevTime-1)
      }, 1000);
      if (breakTimer === 0){
        setBreakTimerRun(false) //Stop break timer
        setCycleComplete(true)  //Indicates a pomodoro cycle (work + break) is complete
      }
    }

    return() => {
      if (timer1)
        clearTimeout(timer1)
      else if (timer2)
        clearTimeout(timer2)
    }

  },[workTimer, workTimerRun, breakTimer, breakTimerRun]);

  const secondsW = workTimer % 60
  const minutesW = Math.floor(workTimer / 60)
  const secondsB = breakTimer % 60
  const minutesB = Math.floor(breakTimer / 60)

  return(
    <div>
      <div>
        <div>
          <h2>Work Time</h2>
          <h1>{minutesW}:{secondsW < 10? `0${secondsW}` : secondsW}</h1>
        </div>
        <div>
          <h2>Break Time</h2>
          <h1>{minutesB}:{secondsB < 10? `0${secondsB}` : secondsB}</h1>
        </div>
        <div>
          <input type="button" value={workTimerRun || breakTimerRun? 'PAUSE':'START'} onClick={() => startTimer(taskInProgress)} />
          {/* <input type="button" value={workTimerRun || breakTimerRun? 'PAUSE':'START'} onClick={() => setWorkTimerRun(!workTimerRun)} /> */}
          <input type="button" value='RESET' />
        </div>
      </div>
    </div>
  );
}

function TaskManager({taskInProgress, setTaskInProgress, cycleComplete, setCycleComplete, setCheckedTask}){
  const [taskKeys, setTaskKey] = useState(2)
  const [taskList, setTaskList] = useState(initialTasks)
  // console.log(taskList)

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
      {cycleComplete && <TaskCompletion taskInProgress={taskInProgress} setTaskInProgress={setTaskInProgress} taskList={taskList} setTaskList={setTaskList} setCycleComplete={setCycleComplete} setCheckedTask={setCheckedTask}/>}
      {/* {console.log('inside task manager ', taskInProgress.taskName)} */}
    </div>
  );
}

function TaskCompletion({taskInProgress, setTaskInProgress, taskList, setTaskList, setCycleComplete, setCheckedTask}){

  const updateTaskInProgress = (completed) => {
    let updatedTask
    taskList.map((task) => {
      if (task.key === taskInProgress.key && !task.finished){   //task has not been finished before
        if (completed){
          // console.log('task completed')
          updatedTask = {
            ...task,
            actualTime: task.actualTime + workTime,
            finished: completed
          }
        }
        else{
          // console.log('task not completed')
          updatedTask = {
            ...task,
            actualTime: task.actualTime + workTime
          }
        }
        const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)
        setTaskList(updatedTaskList)
        setCheckedTask(true)
        setCycleComplete(false) //removes the box asking if the task was completed
        setTaskInProgress({ //Resets task in progress to default
          key: -1, 
          taskName: ""
        })
      }
    })

  }

  return(
    <div>
      {/* {console.log('here ', taskInProgress)} */}
      <h2>{`Have you finished with task: ${taskInProgress.taskName}?`}</h2>
      <input type="button" value="YES" onClick={()=>updateTaskInProgress(true)} />
      <input type="button" value="NO" onClick={()=>updateTaskInProgress(false)}/>
      {/* {console.log('theeeree', taskInProgress.taskName)} */}
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
    // console.log(newTask)
    if (newTask.taskName.length > 0){
      // console.log('greater than zero')
      if (newTask.expectedCycles.length >0){
        // console.log('expected greater than zero')
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
        // console.log('expected is lesser or equal than zero')
        setTaskList((prevTaskList) => ([
          ...prevTaskList, {
            key: taskKeys,
            taskName: newTask.taskName,
            expectedCycles: 1,
            actualTime: 0,
            finished: false
          }
        ]))
        // console.log("another checkpoint")
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
        // console.log("submit new task")
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
  const [cycleComplete, setCycleComplete] = useState(false) //state indicates when a pomodoro cycle has been completed
  // const [choseTask, setChoseTask] = useState(false)
  const [checkedTask, setCheckedTask] = useState(false)    //state indicates if user notified if a task has been completed
  // console.log('first ', taskInProgress)
  // console.log('checkedTask ', checkedTask)
  console.log('task in progress ', taskInProgress)

  return (
    <div>
      <PomodoroTimer 
        taskInProgress={taskInProgress}
        setCycleComplete={setCycleComplete} 
        checkedTask={checkedTask} 
      />
      <TaskManager 
        taskInProgress={taskInProgress} 
        setTaskInProgress={setTaskInProgress} 
        cycleComplete={cycleComplete} 
        setCycleComplete={setCycleComplete}
        setCheckedTask={setCheckedTask} 
        // choseTask={choseTask} 
      />
    </div>
  );
}

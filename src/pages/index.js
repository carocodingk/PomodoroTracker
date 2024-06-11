import { useEffect, useState } from "react";

import PomodoroTimer from "./pomodoroTimer.js";
import VerifyTaskCompletion from "./verifyTaskCompletion.js";
import DialogBox from "./dialogBox.js";
import NewEditTask from "./newEditTask.js";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks =  [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: false}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Grocery shopping1', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Grocery shopping2', expectedCycles: 2, actualTime: 0, finished: false},  
                      ];


function TaskManager({taskInProgress, setTaskInProgress, cycleComplete, setCycleComplete}){
  const [taskKeys, setTaskKey] = useState(4)
  const [taskList, setTaskList] = useState(initialTasks)

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
    return('heeeelooo');
  }

  const timeProcessing = (time) => {
    const secondsW = time % 60
    const minutesW = Math.floor(time / 60)
    const output = `${minutesW}:${secondsW < 10? `0${secondsW}` : secondsW}`
    
    return(
      output
    );
  }



  return(
    <div>
      <div id="colName" className="flexBox justifySpaceBetween">
        <div id="colDescription" className="flexBox">
          <p id="columnLeft" className="columns">Task description</p>
        </div>
        <div>
          <p className="columns rightAlign details">Expected cycles</p>
          <p className="columns rightAlign details">Current time</p>
        </div>
      </div>
      <ul id="taskList">
        {taskList.map((task) => (
          <li className="flexBox flexAlignCenter taskItem justifySpaceBetween">
            <div>            
              <input className="checkBox" type="checkbox" checked={task.finished} />
              <input id="taskName" className="lightBackground brown hoverItem" 
                type="button" 
                value={task.taskName} 
                onClick={()=>chooseTask(task)}
              />
            </div>
            <div>
              <p  className="brown details rightAlign">{task.expectedCycles}</p>
              <p id="totalTime" className="brown details rightAlign">{timeProcessing(task.actualTime)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div id="bottom">
        <NewEditTask 
          taskKeys={taskKeys} 
          setTaskKey={setTaskKey} 
          setTaskList={setTaskList} 
        />
      </div>
      {cycleComplete && 
      <VerifyTaskCompletion 
        workTime={workTime}
        taskInProgress={taskInProgress} 
        setTaskInProgress={setTaskInProgress} 
        taskList={taskList} setTaskList={setTaskList} 
        setCycleComplete={setCycleComplete} 
      />}
    </div>
  );
}

// function NewTask({taskKeys, setTaskKey, setTaskList}){
//   const [newTask, setNewTask] = useState({
//     taskName: "", 
//     expectedCycles: "", 
//   })

//   //  Verifies if the input entered by user are valid: task description is not empty and 
//   //  assigns a default of 1 to expected number of cycles when not specified
//   const inputVerification = () => {
//     if (newTask.taskName.length > 0){
//       if (newTask.expectedCycles.length >0){
//         setTaskList((prevTaskList) => ([
//           ...prevTaskList, {
//             key: taskKeys,
//             taskName: newTask.taskName,
//             expectedCycles: newTask.expectedCycles,
//             actualTime: 0,
//             finished: false
//           }
//         ]))
//       }
//       else{
//         setTaskList((prevTaskList) => ([
//           ...prevTaskList, {
//             key: taskKeys,
//             taskName: newTask.taskName,
//             expectedCycles: 1,
//             actualTime: 0,
//             finished: false
//           }
//         ]))
//       }
//     }
//     else
//       console.log('Please enter a task!')
//     setTaskKey((prevTaskKey) => prevTaskKey+1)  //Updates the key manager
//     setNewTask({                                //Resets the input field to blank
//       taskName: "",
//       expectedCycles: ""
//     })
//   }

//   return(
//     <div id="taskInput" className="flexBox flexRow flexJustifyCenter">
//       {/* Task description field */}
//       <div className="flexBox flexColumn">
//         <input id="newTaskInput" 
//           type="text" onChange={
//             (e) => 
//               setNewTask((prevState) => ({
//                 ...prevState, 
//                 taskName: e.target.value
//               })
//             )}
//             value={newTask.taskName}
//         />
//       </div>
//       {/* Task expected cycles field */}
//       <div className="flexBox flexColumn">
//         <input id="newCycleInput" type="text" onChange={
//           (e) => 
//             setNewTask((prevState) => ({
//               ...prevState,
//               expectedCycles: e.target.value
//             }))
//           }
//           value={newTask.expectedCycles}
//         />
//       </div>
//       {/* Add to list button */}
//       <input id="newTaskButton" className="brown"
//         type="button" value="+" onClick={()=> {  
//           inputVerification()
//         }
//       }/>  
//       {/* <input type="button" value="Edit" onClick={() => setOpenMenu(!openMenu)} />   s  */}
//     </div>
//   );
// }


export default function Home() {
  const [taskInProgress, setTaskInProgress] = useState({
    key: -1,
    taskName: "Choose a task"
  })
  const [cycleComplete, setCycleComplete] = useState(false) //state indicates when a pomodoro cycle has been completed
  const [seenInstructions, setSeenInstructions] = useState(false)
  // const [openMenu, setOpenMenu] = useState(false);

  const Instructions = () => {
    return(
      <div className="flexBox flexColumn flexJustifyCenter">
        <ul>
          <li>Welcome to a Pomodoro task tracker</li>
          <li>Each Pomodoro cycle consists of 10s of working time and 2s of resting time</li>
          <li>Enter the task and the number of expected pomodoro cycles it requires. Default cycle is 1</li>
          <li>Press the (+) button to add to list</li>
          <li>Select the task to work on</li>
          <li>Select start to initiate the timers</li>
          <li>Notify if the task has been completed</li>
        </ul>
        <input className="lightBackground timerButton brown hoverItem okButton"  
          type="button" 
          value="OK" 
          onClick={()=> setSeenInstructions(true)}/>
      </div>
    );
  }

  return (
    <div id="main" className="lightBackground">
      <p id="trackerTitle" className="centerText">Pomodoro Tracker</p>
      {!seenInstructions && <DialogBox  infoField={Instructions} />}
      <div>
        <PomodoroTimer
          workTime={workTime}
          breakTime={breakTime}
          taskInProgress={taskInProgress}
          setCycleComplete={setCycleComplete} 
        />
        {/* {openMenu && <EditMenu />} */}
        <TaskManager 
          taskInProgress={taskInProgress} 
          setTaskInProgress={setTaskInProgress} 
          cycleComplete={cycleComplete} 
          setCycleComplete={setCycleComplete}
        />
      </div>
    </div>
  );
}

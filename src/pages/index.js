import { useState } from "react";

import PomodoroTimer from "./pomodoroTimer.js";
import DialogBox from "./dialogBox.js";
import TaskManager from "./taskManager.js";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks =  [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: false}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Grocery shopping1', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Grocery shopping2', expectedCycles: 2, actualTime: 0, finished: false},  
                      ];


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
          initialTasks={initialTasks}
          taskInProgress={taskInProgress} 
          setTaskInProgress={setTaskInProgress} 
          cycleComplete={cycleComplete} 
          setCycleComplete={setCycleComplete}
        />
      </div>
    </div>
  );
}

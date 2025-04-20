import { useState } from "react";
import UserContext from "./components/UserContext.jsx";
import TimeContext from "./components/TimeContext.jsx";
import PomodoroTimer from "./components/PomodoroTimer.jsx";
import AppInstructions from "./components/AppInstructions.jsx";
import TaskManager from "./components/TaskManager.jsx";

export default function Home() {
  const [taskInProgress, setTaskInProgress] = useState({
    key: -1,
    taskName: "Enter new task / Select a task from list:"
  })
  const [seenInstructions, setSeenInstructions] = useState(false)
  const [cycleComplete, setCycleComplete] = useState(false) 
  const [openMenu, setOpenMenu] = useState(false)

  const [workTime, setWorkTime] = useState(1500); // 1500 seconds
  const [breakTime, setBreakTime] = useState(300); // 300 seconds

  const closeMenu = ()=>{
    if (openMenu){
      setOpenMenu(false)
    }
  }

  return(
    <div id="main" onClick={()=>closeMenu()}>
      <p id="trackerTitle" className="centerText">Pomodoro Tracker</p>
      <TimeContext.Provider value={{workTime, setWorkTime, breakTime, setBreakTime}}>
        {!seenInstructions && <AppInstructions setSeenInstructions={setSeenInstructions} />}
        <UserContext.Provider value={{taskInProgress, setTaskInProgress}}>
          <PomodoroTimer setCycleComplete={setCycleComplete} />
          <TaskManager cycleComplete={cycleComplete} setCycleComplete={setCycleComplete} openMenu={openMenu} />
        </UserContext.Provider>
      </TimeContext.Provider>
    </div>
  );
}

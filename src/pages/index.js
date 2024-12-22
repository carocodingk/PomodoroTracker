import { useEffect, useState, useContext, createContext } from "react";
import UserContext from "./components/UserContext.jsx";
import TimeContext from "./components/TimeContext.jsx";
import PomodoroTimer from "./components/PomodoroTimer.jsx";
import AppInstructions from "./components/AppInstructions.jsx";
import TaskManager from "./components/TaskManager.jsx";

// Initial values
const workTime = 5;
const breakTime = 2;

export default function Home() {
  const [taskInProgress, setTaskInProgress] = useState({
    key: -1,
    taskName: "Choose a task@@@@@"
  })
  const [seenInstructions, setSeenInstructions] = useState(false)
  const [cycleComplete, setCycleComplete] = useState(false) 
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenu = ()=>{
    if (openMenu){
      setOpenMenu(false)
    }
  }

  return(
    <div onClick={()=>closeMenu()}>
      <p id="trackerTitle" className="centerText">Pomodoro Tracker</p>
      {!seenInstructions && <AppInstructions setSeenInstructions={setSeenInstructions} />}
      <TimeContext.Provider value={workTime}>
        <UserContext.Provider value={{taskInProgress, setTaskInProgress}}>
          <PomodoroTimer workTime={workTime} breakTime={breakTime} setCycleComplete={setCycleComplete}/>
          <TaskManager cycleComplete={cycleComplete} setCycleComplete={setCycleComplete} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </UserContext.Provider>
      </TimeContext.Provider>
    </div>
  );
}

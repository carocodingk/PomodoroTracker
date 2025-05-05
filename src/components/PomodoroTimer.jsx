import { useState , useEffect} from "react";
import UserContext from "./UserContext";
import TimeContext from "./TimeContext";
import AlarmAlert from "./AlarmAlert";
// import styles from "@/styles/PomodoroTimer.module.css"

const { useContext } = require("react");

function PomodoroTimer({setCycleComplete}){
  const t = useContext(UserContext);
  const time = useContext(TimeContext);

  const [workTimer, setWorkTimer] = useState(time.workTime);
  const [workTimerRun, setWorkTimerRun] = useState(false);
  const [breakTimer, setBreakTimer] = useState(time.breakTime);
  const [breakTimerRun, setBreakTimerRun] = useState(false);
  const [timesUp, setTimesUp] = useState(false);

  const startTimer = (taskInProgress) => {
    setCycleComplete(false) //Restart the cycle
    if (taskInProgress.key != -1){
      setWorkTimerRun(!workTimerRun)
    }
  }

  const resetTimer = () => {
    setWorkTimerRun(false)
    setBreakTimerRun(false)
    setWorkTimer(time.workTime)
    setBreakTimer(time.breakTime)
  }

  useEffect(() => {
    let timer1, timer2 

    //Work timer
    if (workTimerRun){
      timer1 = setTimeout(() => { 
        setWorkTimer((prevTime) => prevTime-1)
      }, 1000);
      if (workTimer === 0){ //time's up
        setWorkTimerRun(false) //Stop work timer
        setBreakTimerRun(true) //Start break timer
        setTimesUp(true)
      }
    }
    //Break timer
    if (breakTimerRun){
      timer2 = setTimeout(() => {
        setBreakTimer((prevTime) => prevTime-1)
      }, 1000);
      if (breakTimer === 0){    //Break time's up
        setBreakTimerRun(false) //Stop break timer
        setCycleComplete(true)  //Indicates a pomodoro cycle (work + break) is complete
        resetTimer()
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
      {timesUp && <AlarmAlert setTimesUp={setTimesUp} />}
      <div id='yellowBox'>
        <div>
          <p id='currentTask'>{t.taskInProgress.taskName}</p>
          <div>
            <p className='currentTimeTitle'>Work Time</p>
            <p className='currentTime'>{minutesW}:{secondsW < 10? `0${secondsW}` : secondsW}</p>
          </div>
          <div>
            <p className='currentTimeTitle'>Break Time</p>
            <p className='currentTime'>{minutesB}:{secondsB < 10? `0${secondsB}` : secondsB}</p>
          </div>
          <div>
            <div id='buttonSet'>
              <input className='timerButton'
                type="button" 
                value={workTimerRun || breakTimerRun? 'PAUSE':'START'} 
                onClick={() => 
                  startTimer(t.taskInProgress)
                } 
              />
              <input className='timerButton'
                type="button" 
                value='RESET' 
                onClick={() => 
                  resetTimer()
                } 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
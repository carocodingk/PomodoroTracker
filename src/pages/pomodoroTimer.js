import { useEffect, useState } from "react";
import DialogBox from "./dialogBox";

function PomodoroTimer({workTime, breakTime, taskInProgress, setCycleComplete}){
    const [workTimer, setWorkTimer] = useState(workTime);
    const [workTimerRun, setWorkTimerRun] = useState(false);
    const [breakTimer, setBreakTimer] = useState(breakTime);
    const [breakTimerRun, setBreakTimerRun] = useState(false);
    const [timesUp, setTimesUp] = useState(false);
  
    const startTimer = (taskInProgress) => {
      setCycleComplete(false) //Restart the cycle
      if (taskInProgress.key != -1){
        setWorkTimerRun(!workTimerRun)
      }
      else
        console.log("Please select a task to work on! ")
    }
  
    const resetTimer = () => {
      setWorkTimerRun(false)
      setBreakTimerRun(false)
      setWorkTimer(workTime)
      setBreakTimer(breakTime)
    }
  
    const alarmAlert = () => {
      return(
        <div className="flexBox flexColumn flexJustifyCenter">
          <h2 className="centerText">Your working time is up!</h2>
          <h2 className="centerText">Let's take a break</h2>
          <input className="lightBackground okButton timerButton hoverItem" type="button" value="OK" 
            onClick={()=> setTimesUp(false)}
          />
        </div>
      );
    }
  
  
    useEffect(() => {
      let timer1, timer2
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
      
      if (breakTimerRun){
        timer2 = setTimeout(() => {
          setBreakTimer((prevTime) => prevTime-1)
        }, 1000);
        if (breakTimer === 0){
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
        {timesUp && <DialogBox infoField={alarmAlert} />}
      <div className="yellowBox">
        <div>
          <p className="centerText">{taskInProgress.taskName}</p>
          <div>
            <p className="orange centerText">Work Time</p>
            <p className="centerText brown font1">{minutesW}:{secondsW < 10? `0${secondsW}` : secondsW}</p>
          </div>
          <div>
            <p className="orange centerText">Break Time</p>
            <p className="centerText brown font1">{minutesB}:{secondsB < 10? `0${secondsB}` : secondsB}</p>
          </div>
          <div className="centerMargin">
            <div className="flexBox flexJustifyCenter">
                <input className="lightBackground timerButton brown hoverItem" 
                type="button" 
                value={workTimerRun || breakTimerRun? 'PAUSE':'START'} 
                onClick={() => 
                    startTimer(taskInProgress)
                } 
                />
                <input className="lightBackground timerButton brown hoverItem" 
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
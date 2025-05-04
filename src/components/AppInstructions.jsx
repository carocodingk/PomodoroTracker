import { useContext, useState } from "react";
import styles from "@/styles/popUpBox.module.css"
import TimeContext from "./TimeContext";

function AppInstructions({setSeenInstructions}){
  const time = useContext(TimeContext)
  const [workMinutes, setWorkMinutes] = useState(Math.floor(time.workTime/60));
  const [workSeconds, setWorkSeconds] = useState(time.workTime%60);
  const [breakMinutes, setBreakMinutes] = useState(Math.floor(time.breakTime/60));
  const [breakSeconds, setBreakSeconds] = useState(time.breakTime%60);

  return(
    <div className={styles.modalBox}> 
      <div className={styles.dialogBox}> 
        <ol>
          <li className={styles.textLine}>Pomodoro Technique is a time management method that breaks work into time intervals</li>
          <li className={styles.textLine}>Each interval consists of 25 minutes of work followed by 5 minutes of break</li>
          <li className={styles.textLine}>To change the default length of each interval, follow the README.md instructions</li>
          <li className={styles.textLine}>There is a preloaded task list that you can delete by selecting the "trash can" icon at the bottom</li>
          <li className={styles.textLine}>Enter the task and the number of expected pomodoro cycles it requires (25minutes/cycle). Default cycle is 1</li>
          <li className={styles.textLine}>Press the (+) button to add task to list</li>
          <li className={styles.textLine}>To start working, select your current task and then "START" button to initiate timer</li>
          <li className={styles.textLine}>Once time is up, notify if the task has been completed</li>
          <li className={styles.textLine}>Details of a task can be edited by using "3 dots" icon on the right side of the task'</li>
        </ol>
        <input className={styles.okButton}
          type="button" 
          value="OK" 
          onClick={()=> setSeenInstructions(true)} 
        />
      </div>
    </div>
  );
} 


export default AppInstructions;
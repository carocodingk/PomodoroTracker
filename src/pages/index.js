import { useEffect, useState, useContext, createContext } from "react";
import Pomodoro from './components/PomodoroTimer.jsx'
import UserContext from "./components/UserContext.jsx";
import PomodoroTimer from "./components/PomodoroTimer.jsx";
import AppInstructions from "./components/AppInstructions.jsx";


// const UserContext = createContext({});

// Initial values
// const workTime = 5;
// const breakTime = 2;
// const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: false}, 
//                       {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
//                       {key: 2, taskName: 'Grocery shopping1', expectedCycles: 2, actualTime: 0, finished: false},
//                       {key: 3, taskName: 'Grocery shopping2', expectedCycles: 2, actualTime: 0, finished: false},  
//                     ];


//################################################# */
// function PomodoroTimer({taskInProgress, setCycleComplete}){
//   const [workTimer, setWorkTimer] = useState(workTime);
//   const [workTimerRun, setWorkTimerRun] = useState(false);
//   const [breakTimer, setBreakTimer] = useState(breakTime);
//   const [breakTimerRun, setBreakTimerRun] = useState(false);
//   const [timesUp, setTimesUp] = useState(false);

//   const startTimer = (taskInProgress) => {
//     setCycleComplete(false) //Restart the cycle
//     if (taskInProgress.key != -1){
//       setWorkTimerRun(!workTimerRun)
//     }
//     else
//       console.log("Please select a task to work on! ")
//   }

//   const resetTimer = () => {
//     setWorkTimerRun(false)
//     setBreakTimerRun(false)
//     setWorkTimer(workTime)
//     setBreakTimer(breakTime)
//   }

//   const alarmAlert = () => {
//     return(
//       <div className="flexBox flexColumn flexJustifyCenter">
//         <h2 className="centerText">Your working time is up!</h2>
//         <h2 className="centerText">Let's take a break</h2>
//         <input className="okButton" type="button" value="OK" 
//           onClick={()=> setTimesUp(false)}
//         />
//       </div>
//     );
//   }


//   useEffect(() => {
//     let timer1, timer2
//     if (workTimerRun){
//       timer1 = setTimeout(() => {
//         setWorkTimer((prevTime) => prevTime-1)
//       }, 1000);
//       if (workTimer === 0){ //time's up
//         setWorkTimerRun(false) //Stop work timer
//         setBreakTimerRun(true) //Start break timer
//         setTimesUp(true)
//       }
//     }
    
//     if (breakTimerRun){
//       timer2 = setTimeout(() => {
//         setBreakTimer((prevTime) => prevTime-1)
//       }, 1000);
//       if (breakTimer === 0){
//         setBreakTimerRun(false) //Stop break timer
//         setCycleComplete(true)  //Indicates a pomodoro cycle (work + break) is complete
//         resetTimer()
//       }
//     }

//     return() => {
//       if (timer1)
//         clearTimeout(timer1)
//       else if (timer2)
//         clearTimeout(timer2)
//     }

//   },[workTimer, workTimerRun, breakTimer, breakTimerRun]);

//   const secondsW = workTimer % 60
//   const minutesW = Math.floor(workTimer / 60)
//   const secondsB = breakTimer % 60
//   const minutesB = Math.floor(breakTimer / 60)

//   return(
//     <div>
//       {timesUp && <DialogBox infoField={alarmAlert} />}
//     <div className="yellowBox">
//       <div>
//         <p className="centerText">{taskInProgress.taskName}</p>
//         <div>
//           <p className="orange centerText">Work Time</p>
//           <p className="centerText brown font1">{minutesW}:{secondsW < 10? `0${secondsW}` : secondsW}</p>
//         </div>
//         <div>
//           <p className="orange centerText">Break Time</p>
//           <p className="centerText brown font1">{minutesB}:{secondsB < 10? `0${secondsB}` : secondsB}</p>
//         </div>
//         <div className="centerMargin">
//         <div className="flexBox flexJustifyCenter">
//           <input className="lightBackground timerButton brown hoverItem" 
//             type="button" 
//             value={workTimerRun || breakTimerRun? 'PAUSE':'START'} 
//             onClick={() => 
//               startTimer(taskInProgress)
//             } 
//           />
//           <input className="lightBackground timerButton brown hoverItem" 
//             type="button" 
//             value='RESET' 
//             onClick={() => 
//               resetTimer()
//             } 
//           />
//         </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
//*************************************************** */

//################################################# */
// function TaskManager({taskInProgress, setTaskInProgress, cycleComplete, setCycleComplete}){
//   const [taskKeys, setTaskKey] = useState(4)
//   const [taskList, setTaskList] = useState(initialTasks)

//   const chooseTask = (task) => {
//     if (!task.finished){
//       setTaskInProgress({
//         key: task.key,
//         taskName: task.taskName
//       })
//     }
//     else{
//       console.log("This task has been resolved")
//     }
//     return('heeeelooo');
//   }

//   const timeProcessing = (time) => {
//     const secondsW = time % 60
//     const minutesW = Math.floor(time / 60)
//     const output = `${minutesW}:${secondsW < 10? `0${secondsW}` : secondsW}`
    
//     return(
//       output
//     );
//   }



//   return(
//     <div>
//       <div id="colName" className="flexBox justifySpaceBetween">
//         <div id="colDescription" className="flexBox">
//           <p id="columnLeft" className="columns">Task description</p>
//         </div>
//         <div>
//           <p className="columns rightAlign details">Expected cycles</p>
//           <p className="columns rightAlign details">Current time</p>
//         </div>
//       </div>
//       <ul id="taskList">
//         {taskList.map((task) => (
//           <li className="flexBox flexAlignCenter taskItem justifySpaceBetween">
//             <div>            
//               <input className="checkBox" type="checkbox" checked={task.finished} />
//               <input id="taskName" className="lightBackground brown hoverItem" 
//                 type="button" 
//                 value={task.taskName} 
//                 onClick={()=>chooseTask(task)}
//               />
//             </div>
//             <div>
//               <p  className="brown details rightAlign">{task.expectedCycles}</p>
//               <p id="totalTime" className="brown details rightAlign">{timeProcessing(task.actualTime)}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div id="bottom">
//         <NewTask 
//           taskKeys={taskKeys} 
//           setTaskKey={setTaskKey} 
//           setTaskList={setTaskList} 
//         />
//       </div>
//       {cycleComplete && 
//       <TaskCompletion 
//         taskInProgress={taskInProgress} 
//         setTaskInProgress={setTaskInProgress} 
//         taskList={taskList} setTaskList={setTaskList} 
//         setCycleComplete={setCycleComplete} 
//       />}
//     </div>
//   );
// }
//*************************************************** */


//################################################# */
// function TaskCompletion({taskInProgress, setTaskInProgress, taskList, setTaskList, setCycleComplete}){
//   const updateTaskInProgress = (completed) => {
//     let updatedTask
//     taskList.map((task) => {
//       if (task.key === taskInProgress.key && !task.finished){   //task has not been finished before
//         if (completed){
//           updatedTask = {
//             ...task,
//             actualTime: task.actualTime + workTime,
//             finished: completed
//           }
//         }
//         else{
//           updatedTask = {
//             ...task,
//             actualTime: task.actualTime + workTime
//           }
//         }
//         const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)
//         setTaskList(updatedTaskList)
//         setCycleComplete(false) //removes the box asking if the task was completed
//         setTaskInProgress({ //Resets task in progress to default
//           key: -1, 
//           taskName: "Choose a task"
//         })
//       }
//     })
//   }

//   const checkTask = () => {
//     return(
//       <div>
//         <p className="brown centerText">Have you finished with task:</p>
//         <p className="brown centerText"> {taskInProgress.taskName}?</p>
//         <div id="verificationButton" className="flexBox flexJustifyCenter">
//           <input className="lightBackground brown timerButton hoverItem"
//             type="button" 
//             value="YES" 
//             onClick={()=>
//               updateTaskInProgress(true)
//             }/>
//           <input className="lightBackground brown timerButton hoverItem" 
//             type="button" 
//             value="NO" 
//             onClick={()=>
//               updateTaskInProgress(false)
//             }/>
//         </div>
//       </div>
//     );
//   }

//   return(
//     <DialogBox infoField={checkTask} />
//   );
// }
//*************************************************** */



//################################################# */
// function DialogBox({infoField}){
//   return(
//     <div id="taskVerification1">
//       <div id="taskVerification2" >
//         {infoField()}
//       </div>
//     </div>
//   );
// }
//*************************************************** */



//################################################# */
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
//     </div>
//   );
// }
//*************************************************** */

function Pomodoro1(){
  console.log('inside pomodoro')
  const c = useContext(UserContext);
  console.log(c)
  return(
    <div>
      <h2>{`${c.taskInProgress.key} hello   ${c.taskInProgress.taskName}`}</h2>
    </div>
  );
}

export default function Home() {
  const [taskInProgress, setTaskInProgress] = useState({
    key: -1,
    taskName: "Choose a task"
  })
  const [seenInstructions, setSeenInstructions] = useState(false)

  return(
    <div>
      {!seenInstructions && <AppInstructions setSeenInstructions={setSeenInstructions} />}
      <UserContext.Provider value={{taskInProgress}}>
        <PomodoroTimer />
      </UserContext.Provider>
    </div>
  );

  // const [cycleComplete, setCycleComplete] = useState(false) //state indicates when a pomodoro cycle has been completed
  // const [seenInstructions, setSeenInstructions] = useState(false)



  // const Instructions = () => {
  //   return(
  //     <div className="flexBox flexColumn flexJustifyCenter">
  //       <ul>
  //         <li>Welcome to a Pomodoro task tracker</li>
  //         <li>Each Pomodoro cycle consists of 10s of working time and 2s of resting time</li>
  //         <li>Enter the task and the number of expected pomodoro cycles it requires. Default cycle is 1</li>
  //         <li>Press the (+) button to add to list</li>
  //         <li>Select the task to work on</li>
  //         <li>Select start to initiate the timers</li>
  //         <li>Notify if the task has been completed</li>
  //       </ul>
  //       <input className="lightBackground timerButton brown hoverItem okButton"  
  //         type="button" 
  //         value="OK" 
  //         onClick={()=> setSeenInstructions(true)}/>
  //     </div>
  //   );
  // }

  // return (
  //   <div id="main" className="lightBackground">
  //     <p id="trackerTitle" className="centerText">Pomodoro Tracker</p>
  //     {/* {!seenInstructions && <DialogBox  infoField={Instructions} />} */}
  //     <div>
  //       <PomodoroTimer
  //         taskInProgress={taskInProgress}
  //         setCycleComplete={setCycleComplete} 
  //       />
  //       <TaskManager 
  //         taskInProgress={taskInProgress} 
  //         setTaskInProgress={setTaskInProgress} 
  //         cycleComplete={cycleComplete} 
  //         setCycleComplete={setCycleComplete}
  //       />
  //     </div>
  //   </div>
  // );
}

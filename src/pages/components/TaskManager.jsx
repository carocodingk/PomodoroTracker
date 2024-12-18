import { useState, useContext } from "react";
import UserContext from "./UserContext";

const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: false}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Grocery shopping1', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Grocery shopping2', expectedCycles: 2, actualTime: 0, finished: false},  
                    ];

function TaskManager(){
  const t = useContext(UserContext)
  const [taskList, setTaskList] = useState(initialTasks)
  const [ch, setCh] = useState(null)

  const selectTask = (task) => {
    console.log('initial value ', [t.taskInProgress.key, t.taskInProgress.taskName] )
    if (!task.finished){ //Task is not finished
      // console.log('INSIDE SELECTTASK')
      // t.taskInProgress.key = task.key
      // t.taskInProgress.taskName = task.taskName
      t.setTaskInProgress({key: task.key, taskName: task.taskName})
      console.log('there ', [t.taskInProgress.key, t.taskInProgress.taskName] )
    }
  }

  return(
    <div>
      <ul>
        {taskList.map((task, key) => 
          <li>
              <div className="flexBox">
                <input className='checked' type="checkbox" defaultChecked={false} checked={ch} />
                <input type='button' value={task.taskName} onClick={()=> selectTask(task)} />
                <p>{task.expectedCycles}</p>
                <p>{task.actualTime}</p>
              </div>
          </li>
        )}
      </ul>
    </div>
  )
}
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

export default TaskManager;
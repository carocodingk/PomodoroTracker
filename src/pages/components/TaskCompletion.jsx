import { useContext } from "react"
import TimeContext from "./TimeContext"

function TaskCompletion({taskList, setTaskList, taskInProgress, setTaskInProgress, setCycleComplete}){
  const t = useContext(TimeContext)
  let taskUpdate = {}
  let taskListUpdate = []

  const taskCompletion = (complete) => {
    taskListUpdate = taskList.map((task) => {
      if (task.key === taskInProgress.key){
        if (complete){
          console.log('task is completed: ', taskInProgress)
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t, 
            finished: true
          }
          console.log('task updated ', taskUpdate)
        }
        else{
          console.log('task is not completed: ', taskInProgress)
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t
          }
          console.log('task updated ', taskUpdate)
        }
        //Resets the task in progress, once a cycle has been completed regardless if the task was finished
        setTaskInProgress({ 
          key: -1,
          taskName: 'Select a task:' 
        })
        return taskUpdate
      }
      else {  //Other tasks not selected
        return task
      }
    })
    // console.log('NEW TASKLIST: ', taskListUpdate) 
    setTaskList(taskListUpdate)
    setCycleComplete(false) //Resets the cycle indicator
  }

  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div className="dialogBox">
        <h3 className="boxTitle centerText">Has the task been completed?</h3>
        <div className="flexBox flexJustifyCenter">
          <input type='button' className='timerButton hoverItem' value={'YES!'} onClick={()=>taskCompletion(true)} />
          <input type='button' className='timerButton hoverItem' value={'Not yet!'} onClick={()=>taskCompletion(false)} />
        </div>
      </div>
    </div>
  );
}

export default TaskCompletion;


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
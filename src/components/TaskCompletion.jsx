import { useContext } from "react"
import TimeContext from "./TimeContext"
// import styles from "@/styles/popUpBox.module.css"

function TaskCompletion({taskList, setTaskList, taskInProgress, setTaskInProgress, setCycleComplete}){
  const t = useContext(TimeContext)
  let taskUpdate = {}
  let taskListUpdate = []

  // console.log('inside taskcompletion ', t.workTime)

  const taskCompletion = (complete) => {
    taskListUpdate = taskList.map((task) => {
      if (task.key === taskInProgress.key){
        if (complete){
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t.workTime, 
            finished: true
          }
        }
        else{
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t.workTime
          }
        }
        //Resets the task in progress, once a cycle has been completed regardless if the task was finished
        setTaskInProgress({ 
          key: -1,
          taskName: "Enter new task / Select a task from list:"
        })
        return taskUpdate
      }
      else {  //Other tasks not selected
        return task
      }
    })
    setTaskList(taskListUpdate)
    setCycleComplete(false) //Resets the cycle indicator
  }

  return(
    // <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
    <div className='modalBox'>
      <div className='dialogBox_small'>
        <h3 className='boxText'>Has the task been completed?</h3>
        <div>
          <input type='button' className='okButton_alt' value={'YES!'} onClick={()=>taskCompletion(true)} />
          <input type='button' className='okButton_alt' value={'Not yet!'} onClick={()=>taskCompletion(false)} />
        </div>
      </div>
    </div>
  );
}

export default TaskCompletion;
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
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t, 
            finished: true
          }
        }
        else{
          taskUpdate = {
            ...task,
            actualTime: task.actualTime + t
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
import DialogBox from "./dialogBox"

function VerifyTaskCompletion({workTime, taskInProgress, setTaskInProgress, taskList, setTaskList, setCycleComplete}){
    const updateTaskInProgress = (completed) => {
      let updatedTask
      taskList.map((task) => {
        if (task.key === taskInProgress.key && !task.finished){   //task has not been finished before
          if (completed){
            updatedTask = {
              ...task,
              actualTime: task.actualTime + workTime,
              finished: completed
            }
          }
          else{
            updatedTask = {
              ...task,
              actualTime: task.actualTime + workTime
            }
          }
          const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)
          setTaskList(updatedTaskList)
          setCycleComplete(false) //removes the box asking if the task was completed
          setTaskInProgress({ //Resets task in progress to default
            key: -1, 
            taskName: "Choose a task"
          })
        }
      })
    }
  
    const checkTask = () => {
      return(
        <div>
          <p className="brown centerText">Have you finished with task:</p>
          <p className="brown centerText"> {taskInProgress.taskName}?</p>
          <div id="verificationButton" className="flexBox flexJustifyCenter">
            <input className="lightBackground brown timerButton hoverItem"
              type="button" 
              value="YES" 
              onClick={()=>
                updateTaskInProgress(true)
              }/>
            <input className="lightBackground brown timerButton hoverItem" 
              type="button" 
              value="NO" 
              onClick={()=>
                updateTaskInProgress(false)
              }/>
          </div>
        </div>
      );
    }
  
    return(
      <DialogBox infoField={checkTask} />
    );
  }

export default VerifyTaskCompletion;
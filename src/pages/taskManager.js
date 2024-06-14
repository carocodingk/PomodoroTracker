import { useState } from "react";
import NewEditTask from "./newEditTask";
import VerifyTaskCompletion from "./verifyTaskCompletion";
import EditMenu from "./editMenu";

function TaskManager({initialTasks, taskInProgress, setTaskInProgress, cycleComplete, setCycleComplete}){
    const [taskKeys, setTaskKey] = useState(4)
    const [taskList, setTaskList] = useState(initialTasks)
    const [openMenu, setOpenMenu] = useState(false)
    const [editTask, setEditTask] = useState(null)
  
    const chooseTask = (task) => {
      if (!task.finished){
        setTaskInProgress({
          key: task.key,
          taskName: task.taskName
        })
      }
      else{
        console.log("This task has been resolved")
      }
      return('heeeelooo');
    }

    const chooseTaskEdit = (task) => {
      setEditTask({
        key: task.key,
        taskName: task.taskName
      })
    }


  
    const timeProcessing = (time) => {
      const secondsW = time % 60
      const minutesW = Math.floor(time / 60)
      const output = `${minutesW}:${secondsW < 10? `0${secondsW}` : secondsW}`
      
      return(
        output
      );
    }
  
  
  
    return(
      <div>
        <div id="colName" className="flexBox justifySpaceBetween">
          <div id="colDescription" className="flexBox">
            <p id="columnLeft" className="columns">Task description</p>
          </div>
          <div>
            <p className="columns rightAlign details">Expected cycles</p>
            <p className="columns rightAlign details">Current time</p>
          </div>
        </div>
        {taskList.length > 0?
          <ul id="taskList">
            {taskList.map((task) => (
              <li className="flexBox flexAlignCenter taskItem justifySpaceBetween">
                <div>            
                  <input className="checkBox" type="checkbox" checked={task.finished} />
                  <input id="taskName" className="lightBackground brown hoverItem" 
                    type="button" 
                    value={task.taskName} 
                    onClick={()=>chooseTask(task)}
                  />
                </div>
                <div>
                  <p  className="brown details rightAlign">{task.expectedCycles}</p>
                  <p id="totalTime" className="brown details rightAlign">{timeProcessing(task.actualTime)}</p>
                </div>
              </li>
            ))}
          </ul>
          :
          <div>
            You have no pending tasks
          </div>
        }
        <div id="bottom">
          <NewEditTask 
            taskKeys={taskKeys} 
            setTaskKey={setTaskKey} 
            setTaskList={setTaskList} 
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        </div>
        <div id="menu">
          {openMenu && 
          <EditMenu 
            taskList={taskList}
            setTaskList={setTaskList}/>}
        </div>
        {cycleComplete && 
        <VerifyTaskCompletion 
          workTime={workTime}
          taskInProgress={taskInProgress} 
          setTaskInProgress={setTaskInProgress} 
          taskList={taskList} setTaskList={setTaskList} 
          setCycleComplete={setCycleComplete} 
        />}
      </div>
    );
  }
  
  export default TaskManager;
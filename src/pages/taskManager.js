import { useState } from "react";
import NewEditTask from "./newEditTask";
import VerifyTaskCompletion from "./verifyTaskCompletion";
import EditMenu from "./editMenu";
import ShowTask from "./showTask";

function TaskManager({workTime, initialTasks, taskInProgress, setTaskInProgress, cycleComplete, setCycleComplete, openMenu, setOpenMenu}){
    const [taskKeys, setTaskKey] = useState(4)
    const [taskList, setTaskList] = useState(initialTasks)
    // const [openMenu, setOpenMenu] = useState(false)
    // const [editTask, setEditTask] = useState(null)
    const [editModeOption, setEditModeOption] = useState(-1)
    const [showDetails, setShowDetails] = useState(false)
  
    const chooseTask = (task) => {
      if (!task.finished){
        setTaskInProgress({
          key: task.key,
          taskName: task.taskName,
          expectedCycles: task.expectedCycles,
          actualTime: task.actualTime,
          finished: task.finished
        })
      }
      else{
        console.log("This task has been resolved")
      }
      return('heeeelooo');
    }
  
    const timeProcessing = (time) => {
      const hoursW = Math.floor(time / 3600)
      const remainTime =  time - (hoursW * 3600) 
      const minutesW = Math.floor(remainTime / 60)
      const secondsW = remainTime % 60
      const output = `${hoursW > 9? hoursW : `0${hoursW}`} : ${minutesW > 9? minutesW : `0${minutesW}`} : ${secondsW < 10? `0${secondsW}` : secondsW}`
      console.log("time processing")
      
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
                    onClick={()=> chooseTask(task)}
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
        <div id="menu" >
          {openMenu && 
          <EditMenu 
            taskList={taskList}
            setTaskList={setTaskList}
            setEditModeOption={setEditModeOption}
            taskToEdit={taskInProgress}
            setShowDetails={setShowDetails}
            showDetails={showDetails}
            // setOpenMenu={setOpenMenu}
          />}
          {console.log(editModeOption)}
        </div>
        {cycleComplete && 
        <VerifyTaskCompletion 
          workTime={workTime}
          taskInProgress={taskInProgress} 
          setTaskInProgress={setTaskInProgress} 
          taskList={taskList} setTaskList={setTaskList} 
          setCycleComplete={setCycleComplete} 
        />}
        {showDetails &&
        taskInProgress.key != -1 &&
        <ShowTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          taskToEdit={taskInProgress} 
          // showDetails={showDetails}
          setTaskToEdit={setTaskInProgress}
          setShowDetails={setShowDetails}
        />}
        {console.log('here ', taskInProgress.key)}
      </div>
    );
  }
  
  export default TaskManager;
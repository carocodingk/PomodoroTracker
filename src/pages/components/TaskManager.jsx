import { useState, useContext } from "react";
import UserContext from "./UserContext";
import NewTaskBar from "./NewTaskBar";
import TaskCompletion from "./TaskCompletion"
import TaskEdition from "./TaskEdition";
// import TaskListLabels fr om "./TaskListLabels";

const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: true}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Pay utilities', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Walk dog', expectedCycles: 2, actualTime: 0, finished: true},  
                    ];

function TaskManager({cycleComplete, setCycleComplete, openMenu, setOpenMenu}){
  const t = useContext(UserContext)
  const [nextTaskKey, setNextTaskKey] = useState(4) //Tracks the key for the next new task
  const [taskList, setTaskList] = useState(initialTasks)
  const [menuRequest, setMenuRequest] = useState(-1) //Tracks who has requested the menu for edit/delete(nobody)
  const [editTask, setEditTask] = useState(false) //tracks if an edit request has been made
  const [taskSelected, setTaskSelected] = useState(null)

  const selectTask = (task) => {
    if (!task.finished){ //Task is not finished
      t.setTaskInProgress({
        key: task.key, 
        taskName: task.taskName
      })
    }
  }

  const timeProcessing = (time) => {
    const hoursW = Math.floor(time / 3600)
    const minutesW = Math.floor((time - hoursW * 3600) / 60)
    const secondsW = (time - hoursW * 3600) % 60
    const output = `
      ${hoursW < 10? `0${hoursW}` : hoursW}h
      ${minutesW < 10? `0${minutesW}` : minutesW}m
      ${secondsW < 10? `0${secondsW}` : secondsW}s`
    return(
      output
    );
  }

  const deleteTask = (key) => {
    let taskListUpdate = taskList.filter((task) => (task.key !== key))
    setTaskList(taskListUpdate)
  }

  const menuVisibility = (task) => {
    if (!openMenu){
      setMenuRequest(task.key)
    }
  }

  const editingTask = (task) => {
    setEditTask(true)
    setMenuRequest(-1) //resets selection of task
    setTaskSelected(task)
  }

  return(
    <div className="flexBox flexColumn flexJustifySpaceAround">
      <ul id="taskManager">
        {taskList.map((task, key) => 
          <li>
            <div>
              <div className="taskItem flexBox flexJustifySpaceBetween">
                <div className="flexBox flexAlignItemBaseline">
                  <input className='checked' type="checkbox" checked={task.finished} />
                  <div className='taskItemButton taskItemDesc taskDescription' onClick={()=> selectTask(task)}>{task.taskName}</div>
                </div>
                <div className="flexBox flexAlignItemBaseline">
                  <p className="taskStats">{task.expectedCycles}</p>
                  <p className="taskStats">{timeProcessing(task.actualTime)}</p>
                  <div>
                    <input className='taskItemButton' type='button' value='More' onClick={()=>menuVisibility(task)} />
                  </div>
                </div>
              </div>
              {(menuRequest === task.key)?
              <div>
                <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
                  <div className="dialogBox">
                    <h3 className="boxTitle centerText">Please select one of the options: </h3>
                    <div className="flexBox flexJustifyCenter">
                      <input className="timerButton hoverItem" type="button" value='Edit task' onClick={()=>editingTask(task)} />
                      <input className="timerButton hoverItem" type="button" value='Delete task' onClick={()=>deleteTask(task.key)} />
                      <input className="timerButton hoverItem" type="button" value='Cancel' onClick={()=>setMenuRequest(-1)} />
                    </div>
                  </div>
                </div>
              </div>
                :
                null
              }
            </div>
          </li>
        )}
      </ul>
      <NewTaskBar nextTaskKey={nextTaskKey} setNextTaskKey={setNextTaskKey} setTaskList={setTaskList} />
      {cycleComplete && 
        <TaskCompletion
          taskList={taskList}
          setTaskList={setTaskList}
          taskInProgress={t.taskInProgress}
          setTaskInProgress={t.setTaskInProgress}
          setCycleComplete={setCycleComplete}
      />}
      {editTask &&
        <TaskEdition 
          taskSelected={taskSelected} 
          taskList={taskList} 
          setTaskList={setTaskList} 
          setEditTask={setEditTask} 
      />}
    </div>
  ) 
}

export default TaskManager;
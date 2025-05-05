import { useState, useContext } from "react";
import UserContext from "./UserContext";
import NewTaskBar from "./NewTaskBar";
import TaskCompletion from "./TaskCompletion"
import TaskEdition from "./TaskEdition";
import { RiMore2Fill } from "react-icons/ri";
import styles from "@/styles/TaskManager.module.css"

const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: true}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Pay utilities', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Walk dog', expectedCycles: 2, actualTime: 0, finished: true},  
                    ];

function TaskManager({cycleComplete, setCycleComplete, openMenu}){
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
    // <div>
    <div id='taskManager'>
      <ul id="taskList">
        {taskList.map((task, key) => 
          <li key={key}>
              <div className='taskItem'>
                <div className='taskItemSub'>
                  <input type="checkbox" disabled checked={task.finished} />
                  <div className='taskItemButton' onClick={()=> selectTask(task)}>{task.taskName}</div>
                </div>
                <div className='taskItemSub'>
                  <p className='taskStats'>{task.expectedCycles}</p>
                  <p className='taskStats'>{timeProcessing(task.actualTime)}</p>
                  <div onClick={()=>menuVisibility(task)}>
                    <RiMore2Fill />
                  </div>
                </div>
              </div>
              {(menuRequest === task.key)?
                <div className='modalBox'>
                  <div className='dialogBox'>
                    <h3>Please select one of the options: </h3>
                    <div>
                      <input className='dialogBoxButton' type="button" value='Edit task' onClick={()=>editingTask(task)} />
                      <input className='dialogBoxButton' type="button" value='Delete task' onClick={()=>deleteTask(task.key)} />
                      <input className='dialogBoxButton' type="button" value='Cancel' onClick={()=>setMenuRequest(-1)} />
                    </div>
                  </div>
                </div>
                :
                null
              }
          </li>
        )}
      </ul>
      {taskList.length === 0? 
        <div>
          <p style={{ color: '#E9A200', textAlign: 'center', fontSize: '1.5rem' }}>Your TO DO list is empty</p>
        </div>
        :
        null
      }
      {/* <NewTaskBar nextTaskKey={nextTaskKey} setNextTaskKey={setNextTaskKey} setTaskList={setTaskList} /> */}
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
    // </div>
  ) 
}

export default TaskManager;
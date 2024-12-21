import { useState, useContext } from "react";
import UserContext from "./UserContext";
import NewTaskBar from "./NewTaskBar";
import TaskCompletion from "./TaskCompletion"

const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 3700, finished: true}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 2, taskName: 'Grocery shopping1', expectedCycles: 2, actualTime: 0, finished: false},
                      {key: 3, taskName: 'Grocery shopping2', expectedCycles: 2, actualTime: 0, finished: true},  
                    ];

function TaskManager({cycleComplete, setCycleComplete}){
  const t = useContext(UserContext)
  const [nextTaskKey, setNextTaskKey] = useState(4)
  const [taskList, setTaskList] = useState(initialTasks)
  const [menuRequest, setMenuRequest] = useState(-1) //nobody has requested the menu

  const selectTask = (task) => {
    console.log('initial value ', [t.taskInProgress.key, t.taskInProgress.taskName] )
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
      ${hoursW < 10? `0${hoursW}` : hoursW}:
      ${minutesW < 10? `0${minutesW}` : minutesW}:
      ${secondsW < 10? `0${secondsW}` : secondsW}`
    return(
      output
    );
  }

  const deleteTask = (key) => {
    let taskListUpdate = taskList.filter((task) => (task.key !== key))
    setTaskList(taskListUpdate)
    console.log('tasklistupdate for delete: ',taskListUpdate)
  }

  const openMenu = (key) => {
    setMenuRequest(key)
    console.log('Menu requested by: ', key)
  }

  return(
    <div>
      <ul>
        {taskList.map((task, key) => 
          <li>
              <div className="flexBox">
                <input className='checked' type="checkbox" checked={task.finished} />
                <input type='button' value={task.taskName} onClick={()=> selectTask(task)} />
                <p>{task.expectedCycles}</p>
                <p>{timeProcessing(task.actualTime)}</p>
                <div>
                  <input type='button' value='More' onClick={()=>openMenu(task.key)} />
                  {menuRequest === task.key? 
                    <div>
                      <input type="button" value='Edit' onClick={()=>console.log('edit')}/>
                      <input type="button" value='Delete' onClick={()=>deleteTask(task.key)}/>
                    </div>
                    :
                    null
                  }
                </div>
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
    </div>
  ) 
}

export default TaskManager;
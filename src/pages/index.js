import { useState } from "react";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 0, finished: false}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false} ];




function TaskManager(){
  const [taskList, setTaskList] = useState(initialTasks)

  return(
    <div>
      <ul>
        {taskList.map((task) => (
          <li>
            <input type="checkbox" checked={task.finished} />
            <input type="button" value={task.taskName}/>
            #### {task.expectedCycles} 
            #### {task.actualTime}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function Home() {
  const [taskKeys, setTaskKey] = useState(2)
  const [taskInProgress, setTaskInProgress] = useState({
    taskId: -1,
    taskName: ""
  })


  return (
    <div>
      <TaskManager />
    </div>
  );
}

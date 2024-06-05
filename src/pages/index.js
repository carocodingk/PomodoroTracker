import { useState } from "react";

// Initial values
const workTime = 5;
const breakTime = 2;
const initialTasks = [{key: 0, taskName: 'Meal Prep', expectedCycles: 3, actualTime: 0, finished: false}, 
                      {key: 1, taskName: 'Grocery shopping', expectedCycles: 2, actualTime: 0, finished: false} ];




function TaskManager(){
  const [taskKeys, setTaskKey] = useState(2)
  const [taskList, setTaskList] = useState(initialTasks)

  console.log(taskList)
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
      <NewTask taskKeys={taskKeys} setTaskKey={setTaskKey} setTaskList={setTaskList} />
    </div>
  );
}

function NewTask({taskKeys, setTaskKey, setTaskList}){
  const [newTask, setNewTask] = useState({
    key: null, 
    taskName: "", 
    expectedCycles: 1, 
    actualTime: 0, 
    finished: false
  })

  return(
    <div className="flexBox flexRow">
      <div className="flexBox flexColumn">
        <label>Task description: </label>
        <input type="text" onChange={
          (e) => 
            setNewTask((prevState) => ({
              ...prevState, 
              taskName: e.target.value
            })
          )}
        />
      </div>
      <div className="flexBox flexColumn">
        <label>Expected Cycles:</label>
        <input type="text" onChange={
          (e) =>
            e.target.value.length > 0 && setNewTask((prevState) => ({
              ...prevState,
              expectedCycles: e.target.value
            })
          )}
        />
      </div>
      <input type="button" value="+" onClick={()=> {
        setTaskList((prevTaskList) => [
          ...prevTaskList,{
          key: taskKeys, 
          taskName: newTask.taskName, 
          expectedCycles: newTask.expectedCycles, 
          actualTime: 0, 
          finished: false}
        ]);
        setTaskKey((prevKey) => prevKey+1)}
      }/>
             
    </div>
    
  );
}

export default function Home() {
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

import { useState } from "react";

function NewTaskBar({nextTaskKey, setNextTaskKey, setTaskList}){
  const [newTask, setNewTask] = useState({
    taskName:'',
    expectedCycles: 1
  });

  const taskVerification = () => {
  // check new task description is not empty
    if (newTask.taskName.length > 0){
        setTaskList((prevTaskList) => ([
          ...prevTaskList, {
            key: nextTaskKey,
            taskName: newTask.taskName,
            expectedCycles: Number(newTask.expectedCycles),
            actualTime: 0,
            finished: false
          }
        ]))
        setNextTaskKey(nextTaskKey+1)
    }
    else {
      console.log('Description is empty')
    }
  }

  return(
    <div>
      <input type="text" onChange={
        (e) => 
          setNewTask((prevState) => ({
            ...prevState,
            taskName: e.target.value
          }))
        }
      />
      <input type="number" onChange={
        (e) => 
          setNewTask((prevState) => ({
            ...prevState,
            expectedCycles: e.target.value
          }))
      }/>
      <input type="button" value='+' onClick={() => taskVerification()}/>
    </div>
  );
}

export default NewTaskBar;

// function NewTask({taskKeys, setTaskKey, setTaskList}){
//   const [newTask, setNewTask] = useState({
//     taskName: "", 
//     expectedCycles: "", 
//   })

//   //  Verifies if the input entered by user are valid: task description is not empty and 
//   //  assigns a default of 1 to expected number of cycles when not specified
//   const inputVerification = () => {
//     if (newTask.taskName.length > 0){
//       if (newTask.expectedCycles.length >0){
//         setTaskList((prevTaskList) => ([
//           ...prevTaskList, {
//             key: taskKeys,
//             taskName: newTask.taskName,
//             expectedCycles: newTask.expectedCycles,
//             actualTime: 0,
//             finished: false
//           }
//         ]))
//       }
//       else{
//         setTaskList((prevTaskList) => ([
//           ...prevTaskList, {
//             key: taskKeys,
//             taskName: newTask.taskName,
//             expectedCycles: 1,
//             actualTime: 0,
//             finished: false
//           }
//         ]))
//       }
//     }
//     else
//       console.log('Please enter a task!')
//     setTaskKey((prevTaskKey) => prevTaskKey+1)  //Updates the key manager
//     setNewTask({                                //Resets the input field to blank
//       taskName: "",
//       expectedCycles: ""
//     })
//   }

//   return(
//     <div id="taskInput" className="flexBox flexRow flexJustifyCenter">
//       {/* Task description field */}
//       <div className="flexBox flexColumn">
//         <input id="newTaskInput" 
//           type="text" onChange={
//             (e) => 
//               setNewTask((prevState) => ({
//                 ...prevState, 
//                 taskName: e.target.value
//               })
//             )}
//             value={newTask.taskName}
//         />
//       </div>
//       {/* Task expected cycles field */}
//       <div className="flexBox flexColumn">
//         <input id="newCycleInput" type="text" onChange={
//           (e) => 
//             setNewTask((prevState) => ({
//               ...prevState,
//               expectedCycles: e.target.value
//             }))
//           }
//           value={newTask.expectedCycles}
//         />
//       </div>
//       {/* Add to list button */}
//       <input id="newTaskButton" className="brown"
//         type="button" value="+" onClick={()=> {  
//           inputVerification()
//         }
//       }/>      
//     </div>
//   );
// }
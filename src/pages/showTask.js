import { useState } from "react"

function ShowTask ({taskList, setTaskList, taskToEdit, setTaskToEdit, setShowDetails}){
    const [editedTask, setEditedTask] = useState({
        key: taskToEdit.key, 
        taskName: taskToEdit.taskName, 
        expectedCycles: taskToEdit.expectedCycles,
        actualTime: taskToEdit.actualTime,
        finished: taskToEdit.finished
    })

    const [newTime, setNewTime] = useState({
        minutes: Math.floor(editedTask.actualTime/60),
        seconds: editedTask.actualTime % 60
    })

    const savingChanges = (idx) => {
        const newEditedList = taskList.toSpliced(idx, 1, editedTask)
        setTaskList(newEditedList)
        setTaskToEdit(editedTask)
        setShowDetails(false)
        setTaskToEdit({ //Resets task in progress to default
            key: -1, 
            taskName: "Choose a task21233333"
          })
    }

    return(
        <div>
            {taskList.map((task, idx) => {
                if (task.key === taskToEdit.key){
                    return(
                        <div id="taskVerification1">
                            <div id="test" className="flexBox flexColumn taskVerification2">
                                <div className="topBottomPadding">
                                    <label>Task:</label>
                                    <input className="input" type="text" value={editedTask.taskName} onChange={
                                        (e) => 
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                taskName: e.target.value
                                            })
                                        )} 
                                    />
                                </div>
                                <div className="topBottomPadding">
                                    <label>Expected Cycles:</label>
                                    <input className="input" type="text" value={editedTask.expectedCycles} onChange={
                                        (e) => 
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                expectedCycles: e.target.value
                                            })
                                        )} 
                                    />
                                </div>
                                <div className="topBottomPadding">
                                    <label>Finished?</label>
                                    <input className="input" type="checkbox" value={editedTask.finished} onChange={
                                        (e) => 
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                finished: e.target.value
                                            })
                                        )} 
                                    />
                                </div>
                                <div className="flexBox flexJustifyCenter">
                                    <input className="timerButton hoverItem lightBackground" type="button" value="Save" onClick={() => savingChanges(idx)} />
                                    <input className="timerButton hoverItem lightBackground" type="button" value="Cancel" onClick={() => setShowDetails(false)} />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default ShowTask;
import { useState } from "react"

function ShowTask ({taskList, setTaskList, taskToEdit, setTaskToEdit, setShowDetails}){
    const [editedTask, setEditedTask] = useState({
        key: taskToEdit.key, 
        taskName: taskToEdit.taskName, 
        expectedCycles: taskToEdit.expectedCycles,
        actualTime: taskToEdit.actualTime,
        // actualTimeMin: Math.floor(taskToEdit.actualTime / 60), 
        // actualTimeSec: taskToEdit.actualTime % 60,
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
                                    <label>Actual Time:</label>
                                    {/* {let minutes = 0} */}
                                    <input className="input" type="text" value={Math.floor(editedTask.actualTime/60)} onChange={
                                        (e) => {
                                            // const minutes = e.target.value * 60
                                            // setNewTime((prevState) => ({
                                            //     ...prevState,
                                            //     minutes: e.target.value
                                            // }))
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                actualTime: (e.target.value * 60) + (prevState.actualTime%60)
                                            }))
                                        }} 
                                    />
                                    <input className="input" type="text" value={editedTask.actualTime%60} onChange={
                                        (e) => {
                                            // const seconds = e.target.value
                                            if (e.target.value <= 59){
                                                console.log("smaller")
                                                // setEditedTask((prevState) => ({
                                                //     ...prevState,
                                                //     actualTime: (prevState.actualTime) - (prevState.actualTime%60) + (e.target.value)
                                                // }))
                                            }
                                            else {
                                                console.log("bigger")
                                            }
                                        }} 
                                    />
                                    {/* <input className="input" type="text" value={editedTask.actualTime} onChange={
                                        (e) => 
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                actualTime: e.target.value
                                            })
                                        )} 
                                    /> */}
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
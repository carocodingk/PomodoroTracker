import { useState } from "react"

function ShowTask ({taskList, setTaskList, taskToEdit, showDetails, setShowDetails}){
    // console.log('inside show task')
    // console.log('show details ', showDetails )
    const [editedTask, setEditedTask] = useState({
        key: taskToEdit.key, 
        taskName: taskToEdit.taskName, 
        expectedCycles: taskToEdit.expectedCycles, 
        actualTime: taskToEdit.actualTime, 
        finished: taskToEdit.finished
    })

    const savingChanges = (idx) => {
        // console.log("inside saving changes")
        const newEditedList = taskList.toSpliced(idx, 1, editedTask)
        setTaskList(newEditedList)
        setShowDetails(false)
    }

    // console.log(taskToEdit)

    return(
        <div>
            {taskList.map((task, idx) => {
                if (task.key === taskToEdit.key){
                    return(
                        <div id="taskVerification1">
                            <div id="test" className="flexBox flexColumn taskVerification2">
                                <div>
                                    <label>Task:</label>
                                    <input type="text" value={editedTask.taskName} onChange={
                                        (e) => 
                                            setEditedTask((prevState) => ({
                                                ...prevState,
                                                taskName: e.target.value
                                            })
                                        )} 
                                    />
                                </div>
                                {/* <div className="flexBox"> */}
                                    <div>
                                        <label>Expected Cycles:</label>
                                        <input type="text" value={editedTask.expectedCycles} onChange={
                                            (e) => 
                                                setEditedTask((prevState) => ({
                                                    ...prevState,
                                                    expectedCycles: e.target.value
                                                })
                                            )} 
                                        />
                                    </div>
                                    <div>
                                        <label>Actual Time:</label>
                                        <input type="text" value={editedTask.actualTime} onChange={
                                            (e) => 
                                                setEditedTask((prevState) => ({
                                                    ...prevState,
                                                    actualTime: e.target.value
                                                })
                                            )} 
                                        />
                                    </div>
                                    <div>
                                        <label>Finished?</label>
                                        <input type="checkbox" value={editedTask.finished} onChange={
                                            (e) => 
                                                setEditedTask((prevState) => ({
                                                    ...prevState,
                                                    finished: e.target.value
                                                })
                                            )} 
                                        />
                                    </div>
                                {/* </div> */}
                                <div>
                                    <input type="button" value="Save" onClick={() => savingChanges(idx)} />
                                    <input type="button" value="Cancel" onClick={() => setShowDetails(false)} />
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
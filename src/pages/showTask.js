function ShowTask ({taskList, taskToEdit, showDetails}){
    console.log('inside show task')
    console.log('show details ', showDetails )
    return(
        <div>
            {taskList.map((task) => {
                if (task.key === taskToEdit.key){
                    return(
                        <div id="showTaskBackground">
                            <div id="test" className="flexBox flexColumn">
                                <input type="text" value={task.taskName} />
                                <input type="text" value={task.expectedCycles} />
                                <input type="text" value={task.actualTime} />
                                <input type="checkbox" value={task.finished} />
                                <div>
                                    <input type="button" value="Save" />
                                    <input type="button" value="Cancel" />
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
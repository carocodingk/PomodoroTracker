function AppInstructions({setSeenInstructions}){
  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div className="flexBox flexColumn flexJustifySpaceAround1 dialogBox">
        <ol id="list">
          <li>Welcome to a Pomodoro task tracker</li>
          <li>Each Pomodoro cycle consists of 20 minutes of working time and 5 minutes of resting time</li>
          <li>The current version is for testing purposes. The working time has been set up 10s and resting time
            to 3 seconds. However, this can be changed in the index file on variables 'workTime' and 'breakTime'. 
            Time is expressed in seconds.</li>
          <li>There is a preloaded task list. You can reset it by using the button (-) at the bottom</li>
          <li>Enter the task and the number of expected pomodoro cycles it requires. Default cycle is 1</li>
          <li>Press the (+) button to add to list</li>
          <li>Select the task to work on</li>
          <li>Select start to initiate the timers</li>
          <li>Once time is up, notify if the task has been completed</li>
          <li>Details of a task can be edited by using button 'more'</li>
          <li>To delete all tasks on the list: select button (-) at the bottom</li>
        </ol>
        <input className="timerButton hoverItem okButton"  
          type="button" 
          value="OK" 
          onClick={()=> setSeenInstructions(true)} 
        />
      </div>
    </div>
  );
} 


export default AppInstructions;
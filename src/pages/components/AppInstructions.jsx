function AppInstructions({setSeenInstructions}){
  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div className="flexBox flexColumn flexJustifySpaceAround1 dialogBox">
        <ol id="list">
          <li>Welcome to a Pomodoro task tracker</li>
          <li>Each Pomodoro cycle consists of 10s of working time and 2s of resting time</li>
          <li>Enter the task and the number of expected pomodoro cycles it requires. Default cycle is 1</li>
          <li>Press the (+) button to add to list</li>
          <li>Select the task to work on</li>
          <li>Select start to initiate the timers</li>
          <li>Notify if the task has been completed</li>
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
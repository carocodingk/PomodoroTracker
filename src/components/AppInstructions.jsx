function AppInstructions({setSeenInstructions}){

  return(
    <div className='modalBox'> 
      <div className='dialogBox'> 
        <ol>
          <li className='textLine'>Pomodoro Technique is a time management method that breaks work into time intervals</li>
          <li className='textLine'>Each interval consists of 25 minutes of work followed by 5 minutes of break</li>
          <li className='textLine'>To change the default length of each interval, follow the README.md instructions</li>
          <li className='textLine'>There is a preloaded task list that you can delete by selecting the "trash can" icon at the bottom</li>
          <li className='textLine'>Enter the task and the number of expected pomodoro cycles it requires (25minutes/cycle). Default cycle is 1</li>
          <li className='textLine'>Press the (+) button to add task to list</li>
          <li className='textLine'>To start working, select your current task and then "START" button to initiate timer</li>
          <li className='textLine'>Once time is up, notify if the task has been completed</li>
          <li className='textLine'>Details of a task can be edited by using "3 dots" icon on the right side of the task'</li>
        </ol>
        <input className='okButton'
          type="button" 
          value="OK" 
          onClick={()=> setSeenInstructions(true)} 
        />
      </div>
    </div>
  );
} 

export default AppInstructions;
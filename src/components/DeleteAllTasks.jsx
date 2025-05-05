function DeleteAllTask({setShowDeleteAll, setTaskList, setNewTask}){

  const deleteAllTask = ()=>{
    setTaskList([])
    setNewTask({
      taskName:'',
      expectedCycles: 1
    })
    setShowDeleteAll(false)
  }

  return(
    <div className='modalBox'>
      <div className='dialogBox_small'>
        <p>Would you like to delete all tasks?</p>
        <div>
          <input className='okButton_alt' type="button" value="YES!" onClick={()=>deleteAllTask()} />
          <input className='okButton_alt' type="button" value="NO" onClick={()=>setShowDeleteAll(false)} />
        </div>
      </div>
    </div>
  );
}

export default DeleteAllTask;
function EditMenu({taskList, setTaskList}){
  const removeAll = () => {
    const newTaskList =[]
    setTaskList(newTaskList)
  }




    return(
    <ul>
      <li><input type="button" value="Edit a task" onClick={()=>console.log("first")}/></li>
      <li><input type="button" value="Remove a task" onClick={()=>console.log("second")}/></li>
      <li><input type="button" value="Remove all" onClick={()=> removeAll()}/></li>
    </ul>
    );
}

export default EditMenu;
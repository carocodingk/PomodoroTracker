function DialogBox({infoField}){
  return(
    <div id="taskVerification1">
      <div id="taskVerification2" >
        {infoField()}
      </div>
    </div>
  );
}

export default DialogBox;
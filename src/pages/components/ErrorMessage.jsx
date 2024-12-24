function ErrorMessage({setShowErrorMsg}){
  return(
    <div className="posAbsoluteTop flexBox flexJustifyCenter modalBox">
      <div id="errorBox" className="dialogBox flexBox flexColumn flexJustifySpaceAround">
        <h3>Error! The task you are trying to enter is empty!</h3>
        <input className="timerButton hoverItem okButton"
          type="button" value='OK!' onClick={() => setShowErrorMsg(false)} />
      </div>
    </div>
  );
}

export default ErrorMessage;
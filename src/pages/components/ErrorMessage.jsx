function ErrorMessage({setShowErrorMsg}){
  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div id="errorBox" className="dialogBox flexBox flexColumn">
        <h3 className="boxTitle centerText">Error! The task you are trying to enter is empty!</h3>
        <input className="timerButton hoverItem okButton"
          type="button" value='OK!' onClick={() => setShowErrorMsg(false)} />
      </div>
    </div>
  );
}

export default ErrorMessage;
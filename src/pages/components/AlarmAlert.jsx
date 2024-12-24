function AlarmAlert({setTimesUp}){
  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div className="flexBox flexColumn dialogBox">
        <h3 className="boxTitle centerText">Your working time is up!</h3>
        <h3 className="boxTitle centerText">Let's take a break</h3>
        <input className="okButton" type="button" value="OK" onClick={()=> setTimesUp(false)} />
      </div>
    </div>
  );
}

export default AlarmAlert;
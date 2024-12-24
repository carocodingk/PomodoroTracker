function AlarmAlert({setTimesUp}){
  return(
    <div className="posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox">
      <div id="timesUp1" className="flexBox flexColumn flexJustifySpaceAround dialogBox">
        <h2 className="centerTex test">Your working time is up!</h2>
        <h2 className="centerText test">Let's take a break</h2>
        <input className="okButton" type="button" value="OK" onClick={()=> setTimesUp(false)} />
      </div>
    </div>
  );
}

export default AlarmAlert;
function AlarmAlert({setTimesUp}){
  return(
    <div className="flexBox flexColumn flexJustifyCenter">
      <h2 className="centerTex test">Your working time is up!</h2>
      <h2 className="centerText test">Let's take a break</h2>
      <input className="okButton" type="button" value="OK" onClick={()=> setTimesUp(false)} />
    </div>
  );
}

export default AlarmAlert;
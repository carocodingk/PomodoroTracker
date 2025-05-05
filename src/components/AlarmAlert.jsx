// import styles from "@/styles/popUpBox.module.css"

function AlarmAlert({setTimesUp}){
  return(
    <div className='modalBox'>
      <div className='dialogBox_small'>
        <h3 className='boxText'>Your working time is up!</h3>
        <h3 className='boxText'>Let's take a break</h3>
        <input className='okButton' type="button" value="OK" onClick={()=> setTimesUp(false)} />
      </div>
    </div>
  );
}

export default AlarmAlert;
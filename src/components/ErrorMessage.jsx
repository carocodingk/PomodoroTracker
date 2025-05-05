function ErrorMessage({setShowErrorMsg}){
  return(
    <div className='modalBox'>
      <div className='dialogBox_small'>
        <h3>Error! The task you are trying to enter is empty!</h3>
        <input className='okButton'
          type="button" value='OK!' onClick={() => setShowErrorMsg(false)} />
      </div>
    </div>
  );
}

export default ErrorMessage;
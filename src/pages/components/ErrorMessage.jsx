function ErrorMessage({setShowErrorMsg}){
  return(
    <div>
      <h3>Error! The task you are trying to enter is empty!</h3>
      <input type="button" value='OK!' onClick={() => setShowErrorMsg(false)} />
    </div>
  );
}

export default ErrorMessage;
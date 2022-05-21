import { useEffect, useState } from "react";

function Form(props:any){
  return (
    <div>
      <button data-testid="submit-btn"></button>
      <input type="email" data-testid="usermail" />
      <input type="text" data-testid="username" />
      <input type="text" data-testid="usersurname" />
      <textarea data-testid="usermsg" />
    </div>
  )
}

export default Form;
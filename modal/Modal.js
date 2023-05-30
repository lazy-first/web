import Login from "./Login";
import Password from "./Password";
import "../modal/Login.css";
import SignUp from "./SignUp";
import { useState } from "react";

export default function Modal({onModal, setOnModal}) {
  const [email, setEmail] = useState('');
        
  return (
    <div id="modal">
      
      {onModal === 1 && <Login setOnModal={setOnModal} email={email} setEmail={setEmail} />}
      {/* <Login/> */}
      {onModal === 2 && <Password setOnModal={setOnModal} email={email}/>}
      {onModal === 3 && <SignUp setOnModal={setOnModal} email={email}  />}
      
    </div>
  );
}
import Login from "./Login";
import Password from "./Password";
import "../modal/Login.css";
import SignUp from "./SignUp";

export default function Modal({onModal, setOnModal}) {
        
  return (
    <div id="modal">
      
      {/* {onModal === 1 && <Login setOnModal={setOnModal} />} */}
      {/* <Login/> */}
      {onModal === 1 && <SignUp setOnModal={setOnModal} />}
      {/* {onModal === 1 && <Password setOnModal={setOnModal} />} */}
    </div>
  );
}
import {useState} from "react";
import '../App.css'; // Assuming you will create a SignUp.css file for styling
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase"
const auth = getAuth(app);
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUser=()=>{
         createUserWithEmailAndPassword(auth,email,password).then(value=>alert("Sucessfully Sign in"));
    }
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onChange={e=>setEmail(e.target.value)} value={email} type="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onChange={e=>setPassword(e.target.value)} value={password} type="password" id="password" required />
        </div>
        <button onClick={createUser}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
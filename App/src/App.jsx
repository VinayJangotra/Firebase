import { app } from './firebase'
import './App.css'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import SignUp from './Pages/SignUp';


const auth = getAuth(app);


function App() {


   const signupUser = () => {
     createUserWithEmailAndPassword(
       auth,
       "newUserEmail@example.com",
       "password"
     )
       .then((userCredential) => {
         // Sign-up successful.
         console.log("User created:", userCredential.user);
         // Optionally, call putData to add additional user details to the database
       })
       .catch((error) => {
         // Handle Errors here.
         console.error("Error signing up:", error);
       });
   };

  return (
    <div className="App">
      <SignUp></SignUp>
      <header className="App-header">
        <button onClick={signupUser}>Add Data</button>
      </header>
    </div>
  );
}

export default App
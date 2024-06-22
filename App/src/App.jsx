import {getDatabase, set,ref} from "firebase/database"
import { app } from './firebase'
import './App.css'

const db=getDatabase(app);
function App() {
  const putData =()=>{
    set(ref(db,"users/vinay"),{
      id:1,
      username:"vinay",
      email:"vs852664@gmail.com",
      age:21,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={putData}>Add Data</button>
      </header>
    </div>
  )
}

export default App

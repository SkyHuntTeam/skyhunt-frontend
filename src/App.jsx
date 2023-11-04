import {useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import './App.css';

function App() {
  const [currentForm, setCurrenForm] = useState("login");
  
  const toggleForm = (formName) => {
    setCurrenForm(formName);
  }

  return(
  <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
  </div>
  );
}



export default App;

import React, {useState} from 'react';
import Login from './Auth Components/Login';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const handleLogIn = ()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      {isLoggedIn ? 'Login successfull' : <Login /> }
    </div>
  );
}

export default App;

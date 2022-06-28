import React, { useState }from 'react';
import RegisterForm from './components/RegisterForm';

function App() {
  
  const [user, setUser] = useState({ email: "", password: ""});
  const [error, setError] = useState("");
  
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const Login = details => {
    console.log(details);

    if(details.password === details.confirmPassword) {
      

      if(PWD_REGEX.test(details.confirmPassword)) {
        setUser({email: details.email,
                password: details.password })
      setError('')
      } else {
        setError(`Password must be 8-24 characters, include a number and a special character`)
      }
      
    } else {
      
      setError(`Password and Confirm Password do not match`)
    }
  }
  const Logout = () => {
    setUser({email: "", password: ""})
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div>
          <h2>Welcome your password was valiadiated </h2>
          <button onClick={Logout}>Logout</button>
        </div>
       ) : ( <RegisterForm Login={Login} error={error} /> )} 
    </div>
  );
}

export default App;

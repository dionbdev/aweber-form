import React, { useState} from 'react'

const RegisterForm = ({Login, error}) => {
    const [details, setDetails] = useState({ email: "", password: "", confirmPassword: ""});
    
    const submitHandler =  e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2 id="title">Register Form</h2>
            
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword} />
                </div>
                <input type="submit" value="LOGIN" />
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
        </div>
    </form>
  )
}

export default RegisterForm
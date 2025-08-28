
import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Login = ({setIsLoginBox}) => {

  const {setEmail, setPassword, login, setUsertype} = useContext(GeneralContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login();
  }
  return (
    <form className="authForm modern-auth-card animate-fadein">
        <h2 className="auth-title">Welcome Back</h2>
        <div className="modern-input-group">
            <input type="email" className="modern-input" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="modern-input-group">
            <input type="password" className="modern-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="modern-input-group">
          <select className="modern-input" onChange={(e)=> setUsertype(e.target.value)}>
            <option value="">User type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button type="submit" className="modern-btn primary-btn" onClick={handleLogin}>Sign in</button>
        <p className="auth-switch">Not registered? <span className="auth-link" onClick={()=> setIsLoginBox(false)}>Register</span></p>
    </form>
  )
}
export default Login
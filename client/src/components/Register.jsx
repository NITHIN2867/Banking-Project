import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Register = ({setIsLoginBox}) => {

  const {setUsername, setEmail, setPassword, usertype, setUsertype, register, setHomeBranch} = useContext(GeneralContext);

  const handleRegister = async (e) =>{
    e.preventDefault();
    await register()
  }
  return (
    <form className="authForm modern-auth-card animate-fadein">
        <h2 className="auth-title">Create Account</h2>
        <div className="modern-input-group">
            <input type="text" className="modern-input" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
        </div>
        <div className="modern-input-group">
            <input type="email" className="modern-input" placeholder="Email address" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="modern-input-group">
            <input type="password" className="modern-input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="modern-input-group">
          <select className="modern-input" onChange={(e)=> setUsertype(e.target.value)}>
            <option value="">User type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        {usertype === 'customer' ? (
          <div className="modern-input-group">
            <select className="modern-input" onChange={(e)=> setHomeBranch(e.target.value)}>
              <option value="">Home branch</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="mumbai">Mumbai</option>
              <option value="tirupati">Tirupati</option>
              <option value="vizag">Vizag</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="kochi">Kochi</option>
              <option value="Venkatagiri">Venkatagiri</option>
            </select>
          </div>
        ) : null}
        <button className="modern-btn primary-btn" onClick={handleRegister}>Sign up</button>
        <p className="auth-switch">Already registered? <span className="auth-link" onClick={()=> setIsLoginBox(true)}>Login</span></p>
    </form>
  )}
export default Register;
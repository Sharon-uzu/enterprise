import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import circle from '../images/Ellipse 240.png'


const Login = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/dashboard')
      }


  return (
    <div className='sign-form'>

        <div className="sign">
            <div className="sign-l">
                <img src={circle} alt="" />
            </div>

            <div className="sign-r">
                <img src={circle} alt="" />
                <h2>Login to your account</h2>
                <p>Welcome back! Please enter your details.</p>

                <div>
                <p>Department</p>
                   <select name="" id="">
                    <option value="select department"></option>
                    <option value="product">Product</option>
                    <option value="service">Service</option>
                   </select>
                </div>
                

                <div>
                    <p>Email</p>
                    <input type="email"  placeholder='Enter your email' className='inp'/>
                </div>

                <div>
                    <p>Password</p>
                    <input type="password"  className='inp'/>
                    <h6>Forgot password?</h6>
                </div>

                <div>
                    <input type="checkbox" name="" id="" />
                    <span>Remember for 30 days</span>
                </div>

                <div>
                    <button onClick={login}>Login</button>
                </div>

                <a href="" className='google'>
                    <FcGoogle className='sign-i'/>
                    <span>Login with Google</span>
                </a>

                <span className='acct'>
                Don’t have an account?
                <Link to='/create'>Create account.</Link>
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default Login
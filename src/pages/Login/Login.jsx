import React, { useState } from 'react';
import './Login.css'
import { toast } from 'react-toastify';
import { useSignInMutation } from '../../components/context/api/UserApi/UserApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken,setUser } from '../../components/context/AuthSlice';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signIn, { isError,isLoading,isSuccess,data }] = useSignInMutation();
    const navigate  = useNavigate()
     const dispatch =  useDispatch()

    if(isSuccess){
        // localStorage.setItem("x-auth-token", data.data.token)
        dispatch(setToken(data.data.token))
        dispatch(setUser(data.data.user))
        toast.success('Successfully logged in!');
        navigate("/admin")
      }
      if(isError){
        toast.error('Xato kiritingiz')
      }
      const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
          UserName:username,
          password:password
        }) 
       }
    return (
        <div className='hammasi'>
       <div className="login_row">
       <div className="login">
                <h1>Login</h1>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">SurName</label> <br />
                <input
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                type="text" placeholder='SurName' /> <br />
                <label htmlFor="">Password</label> <br />
                <input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                type="text" placeholder='Password'/> <br />
                <button>
                {
                    isLoading ? "Loading..." 
                      : 
                    "Login"
              
                  }
                </button>
            </form>
        </div>
       </div>
        </div>
    );
}

export default Login;

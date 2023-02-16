import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(login(username, password,));
        navigate("/");
      };
      
  return (
    <StyledLogin>
        
        <div onSubmit={submitHandler} className="login">
            <p>Login</p>
            <form >
                
                <label htmlFor="text">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter your username' type="text" />
                
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' type="password" />
                <Link to={"/register"}>Have no accout?</Link>
                <Button type='submit' variant="outlined"  >Login</Button>
            </form>
        </div>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
    width: 100% ;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login{
    border-radius: 5px;

        width: 25%;
        height: fit-content;
        overflow: scroll;
        padding: 2rem;
        background-color: #282828;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            margin: 0;
            margin-bottom: 2rem;
            font-weight: bold;
            font-size: 2rem;

        }
        form{
            width: 90%;
            display: flex;
            flex-direction: column;
            label{
                margin-top: 1rem;
            }
            input{
                margin-top: .3rem;
                background-color: rgba(0,0,0,.3);

                border: none;
                color: #fff;
                outline: none;
                padding: .7rem ;
                border-radius: 5px;

            }
            button{
            margin-top: 1rem;
            align-self: center;
            margin-left: .8rem;
            color: #282828;
            background-color: white;
            font-size: 10px;
            padding: .4rem 1rem;
            border-radius: 5px;
            width: 4rem;
            border: none;
            cursor: pointer;
        }
        a{
            font-size: .8rem;
            margin-top: .8rem;
            margin-left: 0;
            padding: 0.5rem 1rem;
            padding-left: 0;
            color: #a7a7a7;
            width: fit-content;
        }
            
        }
    }
`
export default Login
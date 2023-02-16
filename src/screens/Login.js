import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import background from "../images/background.png"
import ErrorMessage from '../components/ErrorMessage';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [open, setOpen] = useState(false);
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo, error} = userLogin
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(login(username, password));
        if (userInfo==null) {
          console.log(open);
          setMessage("wrong credentials were given");
          setOpen(true);
        } 
        else{
            navigate("/")
        }
    };
    
  return (
    <StyledLogin>
        <ErrorMessage open={open} setOpen={setOpen} message={message} type={"error"}/>
        <div onSubmit={submitHandler} className="login">
            <p>Login</p>
            <form >
                
                <label htmlFor="text">Username</label>
                <input required value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter your username' type="text" />
                
                <label  htmlFor="password">Password</label>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' type="password" />
                <Link to={"/register"}>Have no accout?</Link>
                <Button type='submit' variant="outlined"  >Login</Button>
            </form>
        </div>

    </StyledLogin>
  )
}

const StyledLogin = styled.div`
     background-image: url(${background});
        background-size: cover;
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
        background-color: rgba(40,40,40, .9);
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
                background-color: rgba(0,0,0,.7);

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
            
            font-size: 10px;
            padding: .4rem 1rem;
            border-radius: 5px;
            width: 4rem;
            border: none;
            cursor: pointer;

            background-color: rgba(255,255,255, .9);
            :hover{
                background-color: rgba(255,255,255, .7);
            }
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
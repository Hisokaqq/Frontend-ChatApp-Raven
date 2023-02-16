import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import ErrorMessage from '../components/ErrorMessage';
import background from "../images/background.png"
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [message, setMessage] = useState(null)
    const [open, setOpen] = useState(false);
    const userRegister = useSelector(state=>state.userRegister)
    const {userInfoR, loading, error } = userRegister
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const location = useLocation()
    
      
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password === rePassword) {
            await dispatch(register(username, email, password));
            console.log(userInfoR)
            if(userInfoR==null){
            
            setOpen(true);
            setMessage("this username is taken");
        }
        else{
            navigate("/")
        }
        } else {
          setOpen(true);
          setMessage("passwords do not match!");
        }
      };
      
      
  return (
    <Styledregister>
        <ErrorMessage open={open} setOpen={setOpen} message={message} type={"error"}/>
        <div onSubmit={submitHandler} className="register">
            <p>register</p>
            <form >
                
                <label htmlFor="text">email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='enter your email' type="email" />

                <label htmlFor="text">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} required placeholder='enter your username' type="text" />
                
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='enter your password' type="password" />

                <label htmlFor="password">Password</label>
                <input value={rePassword} onChange={(e)=>setRePassword(e.target.value)} required placeholder='repeat your password' type="password" />

                <Link to={"/login"}>Have an account?</Link>
                <Button type='submit' variant="outlined"  >register</Button>
            </form>
        </div>
    </Styledregister>
  )
}

const Styledregister = styled.div`
 background-image: url(${background});
        background-size: cover;
    width: 100% ;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .register{
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
            background-color: white;
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
export default Register
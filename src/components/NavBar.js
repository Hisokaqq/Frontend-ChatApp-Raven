import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import { logout } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import raven from "../images/logo.ico"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const navigate = useNavigate()
    const LogoutHandler = async () => {
        await dispatch(logout());
        navigate("/login");
      }
  return (
    <StyledNavBar>
        <Link to="/">
            <Avatar sx={{ width: 64, height: 64 }} alt="logo" src={raven} />
        </Link>
        <div className='user'>
            <div className="info">
            <Avatar alt="Remy Sharp" src={userInfo.profile.avatar} sx={{ width: 34, height: 34 }}>
  <span style={{textTransform: "uppercase" }}>{userInfo.username.charAt(0)}</span>
</Avatar>

            <p className='username'>{ userInfo.username}</p>  
            </div>
            <button onClick={LogoutHandler}>Logout</button>
        </div>
    </StyledNavBar>
  )
}

const StyledNavBar = styled.div`
    display: flex;
    background-color: #1E1E1E;
    align-items: center;
    height: 2rem;
    padding: 0.74rem 0.74rem 0.74rem 0;
    justify-content: space-between;

    .logo{
        font-weight: bold;
    }
    .user{
        display: flex;
        align-items: center;
        .info{
            
        .username{
            font-size: 0.9rem;
            margin: 0 .1rem 0 .7rem;
        }
        display: flex;
        align-items: center;
        }   

        button{
            background: #282828;
            color: #ddddf7;
            font-size: 10px;
            border: none;
            cursor: pointer;
            transition: all .3s;
            &:hover{
                background: #494949;
            }
        }
    }
`
export default NavBar
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../actions/userActions'
import Moment from 'react-moment'
const User = ({userI, active, setActive, index, size}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userDetails = useSelector((state) => state.userDetails)
  const {user} = userDetails

  const OpenUserHandler = async () => {
    await setActive(index)
    await dispatch(getUserDetails(userI.id))
  }
  
  
  return (
    <StyledUser props={user.id==userI.id} onClick={OpenUserHandler}>
      <Avatar sx={{ width: size, height: size }} alt={userI.username} src={userI.profile.avatar} ><span style={{textTransform: "uppercase" }}>{userI.username.charAt(0)}</span></Avatar>
      
      <div className="name_chat">
        <div className="name_date">
        <p className='username'>{userI.username}</p>
        {
          userI.last_message   &&
        <Moment fromNow className='date'>{userI.last_message.timestamp  }</Moment>

        }
        </div>
        <p className='message'>{ userI.last_message && userI.last_message.content}</p>
      </div>
    </StyledUser>
  )
}

const StyledUser = styled.div`
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  padding: .6rem;
  position: relative;
  border-bottom: .4px solid #a7a7a7;
  background-color: ${props => props.props ? "#1E1E1E" : "transparent"};
  cursor: pointer;
  &:hover{
    background-color: ${props => !props.props ? "#4a4a4a" : "#1E1E1E"};
  }
  .name_chat{
    padding: .1rem;
    width: 100%;
    .name_date{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
    p{
      margin: 0;
      margin-left: .7rem;
    }
    .username{
      font-size: .9rem;
    }
    .message, .date{
      font-size: .7rem;
      color: #a7a7a7;
    }
  }
`
export default User
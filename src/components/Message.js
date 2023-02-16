import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import Moment from 'react-moment';
import { decodeText } from './somef';

const Message = ({message, same=false}) => {
  return (
    <StyledMessage>
        
            <div className="avatar">
            {!same &&
                <Avatar alt="Remy Sharp" src={message.user_profile_avatar} sx={{ width: 35, height: 35 }} ><span style={{textTransform: "uppercase" }}>{message.from_user_username.charAt(0)}</span></Avatar>
            }
            </div>
            <div className="message">
                    {!same && 
                    <p className='username'>{message.from_user_username}</p>
                    }
                    
                <div className="text">
                    <p>{decodeText(message.content)}</p>
                    <Moment fromNow className="date">{message.timestamp}</Moment>
                </div>
            </div>
        
    </StyledMessage>
  )
}

const StyledMessage = styled.div`
    display: flex;
    margin: .3rem;
    p{
        margin: 0;
    }
    .avatar{
        width: 45px;
        padding: .3rem;
    }
    .message{
        margin:  0.3rem;
        width: 100%;
        .username{
            color: #a7a7a7;
            font-size: .9rem;
        }
        .text{
            display: flex;
            width: 100%;
            justify-content: space-between;
            .date{
                color: #a7a7a7;
                font-size: .7rem;
            }
            p{
            margin-top: .3rem;
            font-size: .8rem;
        }
        }
        
    }

`
export default Message
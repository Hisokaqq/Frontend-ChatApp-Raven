import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getChat } from '../actions/chatActions';
import { setUserId } from '../actions/userActions';

const MessageList = () => {
  const dispatch = useDispatch()
  const chatRef = useRef(null)
  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
  const chatR = useSelector(state => state.chat);
  const { chat } = chatR;

  useEffect(() => {
    dispatch(getChat(user.id))
    dispatch(setUserId(user.id))
  }, [dispatch, user.id])

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat.messages]);

  return (
    <StyledMessageList ref={chatRef}> 
        {chat.messages.map((c,ix)=> !(chat.messages[ix-1] && chat.messages[ix-1].from_user_username == c.from_user_username )
        ? 
        <Message message={c} same={false} key={c.id}/> 
        : 
        <Message message={c} same={true} key={c.id}/> 
        )}
    </StyledMessageList>
  )
}

const StyledMessageList = styled.div`
    height: calc(100% - 2rem - 6rem);
    overflow: scroll;
`

export default MessageList

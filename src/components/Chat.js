import React from 'react'
import styled from  'styled-components';
import TopBar from './TopBar';
import MessageList from './MessageList';
import CreateMessage from './CreateMessage';
import { useSelector } from 'react-redux';
const Chat = () => {
  const userDetails = useSelector(state=>state.userDetails)
  const {user} = userDetails
  return (
    <StyledChat>
      {Object.keys(user).length!=0 ?
      <>
      <TopBar />
      <MessageList  />
      <CreateMessage/>
      </>
      :
      <div className='no'>
        <p >select a chat to start messaging</p>
      </div>
      

    }
    </StyledChat>
  )
}

const StyledChat = styled.div`
  width: 70%;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .no{
    width: fit-content;
    align-self: center;
    p{
      font-size: .75rem;
      letter-spacing: .1rem;
      color: #a7a7a7;
    }
  }
  /* position: relative;
  overflow: scroll; */
`
export default Chat
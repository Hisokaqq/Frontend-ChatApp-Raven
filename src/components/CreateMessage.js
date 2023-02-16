import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { createMessage, getChat } from '../actions/chatActions';
import { getChatUsersList } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { codeText } from './somef';

const CreateMessage = () => {
  const dispatch = useDispatch()
  const chatR = useSelector(state => state.chat);
  const userDetails = useSelector(state => state.userDetails);
  const SearchFor = useSelector(state => state.SearchFor)
  const { user } = userDetails;
  const { chat } = chatR;
  const [text, setText] = useState("")
  const [id, setId] = useState(null)

  useEffect(() => {
    setId(chat.id)
  }, [chat])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createMessage(id, codeText(text)))

    dispatch(getChat(user.id))
    dispatch(getChatUsersList(SearchFor))
    setText("")
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (text.trim().length > 0) {
        handleSubmit(event);
      }
    }
  }

  return (
    <StyledCreateMessage id="myform" onSubmit={handleSubmit}>
      <div className="searchForm">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          spellCheck="false"
          className='input'
          placeholder='write a message...'
        ></textarea>
      </div>
      <div className="send">
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" sx={{ color: "white" }} aria-label="upload picture" component="label">
            <input hidden type="file" />
            <AttachFileIcon />
          </IconButton>
          <IconButton color="primary" sx={{ color: "white" }} aria-label="upload picture" component="label">
            <input hidden type="file" accept='image/*' />
            <PhotoCamera />
          </IconButton>
          <button disabled={!text.trim().length} type="submit" form="myform" style={{ all: "unset" }}>
            <IconButton disabled={!text.trim().length} color="primary" sx={{ color: "white" }} aria-label="upload picture" component="label">
              <SendIcon style={{ transition: "all .3s" }} sx={{ color: `${!text.trim().length ? "#909090" : "#fff"}` }} />
            </IconButton>
          </button>
        </Stack>
      </div>
    </StyledCreateMessage>
  )
}



const StyledCreateMessage = styled.form`
    z-index: 2;
    background-color: #282828;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    .searchForm{
            padding: 10px;
            flex: 1;
            .input{
                width: 100%;
                resize: none;
                height: fit-content;
                background-color: transparent;
                margin-left: .4rem;
                letter-spacing: 0;
                border: none;
                color: #fff;
                outline: none;

                &::placeholder{
                    font-family: 'Lato', sans-serif;
                }
            }
        }
    .send{
        padding: 1rem;
        display: flex;
        /* button{
            margin-left: .8rem;
            background-color: #fff;
            color: #282828;
            font-size: 10px;
            padding: .4rem 1rem;
            border-radius: 10px;
            border: none;
            cursor: pointer;
        } */
    }
    
`
export default CreateMessage
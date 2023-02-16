import React, {useState, useEffect} from 'react'
import styled from  'styled-components';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const MainBox = ({text, setText}) => {
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    const x = async () => {
      if (!userInfo) {
        await navigate("/login")
      } 
    }
    x()
  }, [userInfo, navigate])

  

  return (
    <>
      {userInfo && 
        <StyledBox>
          <>
            <SideBar text={text} setText={setText} />
            <Chat  />
          </>
        </StyledBox>
      }
    </>
  )
}

const StyledBox = styled.div`
    border: 1px solid #ddddf7;
    position: relative;
    border-radius: 10px;
    width: 65%;
    height: 80%;
    display: flex;
    overflow: hidden;
`

export default MainBox

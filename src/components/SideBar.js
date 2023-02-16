import React, { useState } from 'react'
import styled from  'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import UsersList from './UsersList';
const SideBar = ({text, setText}) => {
  
  return (
    <StyledSideBar>
        <NavBar />
        <SearchBar text={text} setText={setText}/>
        <UsersList text={text}  />
    </StyledSideBar>
  )
}

const StyledSideBar = styled.div`
    width: 30%;
    border-right: .1px solid #ddddf7;
    background-color: #282828;
`
export default SideBar
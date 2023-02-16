import React, { useState } from 'react'
import styled from 'styled-components'
import { getChats } from '../actions/chatActions'
import { getUsersList, getChatUsersList } from '../actions/userActions'
import { useDispatch } from 'react-redux'
import { setText } from '../actions/userActions'
const SearchBar = ({text}) => {
  const dispatch = useDispatch( )
  const changeHandler = (e) => {
    const searchText = e.target.value
    dispatch(setText(e.target.value))

    dispatch(getChats(searchText))
    dispatch(getUsersList(searchText))
    dispatch(getChatUsersList(searchText))
  }
  return (
    <StyledSearchBar>
        <div className="searchForm">
            <input  onChange={(e)=>changeHandler(e)} type="text" placeholder='find a user' />
        </div>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.div`
        border-bottom: .1px solid #ddddf7;
        height: 2.5rem;
        .searchForm{
            padding: 10px;
            input{
                width: 100%;
                background-color: transparent;
                border: none;
                color: #fff;
                outline: none;

            }
        }

`

export default SearchBar
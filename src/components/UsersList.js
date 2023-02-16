import React, {useState} from 'react'
import styled from 'styled-components'
import User from './User'
import { useSelector, useDispatch } from 'react-redux'
const UsersList = ({text}) => {

  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const usersList = useSelector(state=>state.usersList)
  const {users} = usersList
  const chatss = useSelector(state=>state.chats)
  const {chats} = chatss
  const usersChatList = useSelector(state=>state.usersChatList)
  const {fusers} = usersChatList
  const [active, setActive] = useState(null)
  return (
    <StyledUsersList>
        {/* {fusers.length == 0  && text.length>0 ?
        <div className='no'>
          <span>No chat with this user</span>
        </div>
        :
        fusers.length == 0  && 
        <div className='no'>
          <span>You have got no chats</span>
        </div>
        } */}
        {fusers.map((user, index)=><User index={index +1}  active={active} setActive={setActive} userI={user} key={user.id} size={54}/>)}
        {fusers.length > 0 && users.length > 0 &&
          <div className='line'></div>
        }
        {users.map((user, index)=><User index={-index }  active={active} setActive={setActive} userI={user} key={user.id} size={34}/>)}
    </StyledUsersList>
  )
}

const StyledUsersList = styled.div`
  height: calc(100% - 2rem - 4rem);
  overflow: scroll;
  .no{
    margin: auto;
    width: fit-content;
    padding: 3rem;
    font-size: .7rem;
      color: #a7a7a7;
  }
  .line{
    width: 100%;
    height: 2px;
    background-color: #a7a7a7;


  }
`
export default UsersList
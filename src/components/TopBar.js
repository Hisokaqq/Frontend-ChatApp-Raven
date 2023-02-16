import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector, useDispatch } from 'react-redux';
import { friending, login, getFriendsList, getUsersList } from '../actions/userActions';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
const TopBar = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
  const userLogin = useSelector(state => state.userLogin);
  // const { userInfo } = userLogin;
  // const [friends, setFriends] = useState(false);
  // useEffect(() => {
  //   setFriends(userInfo.user.some(u => u.friends === user.id));
  // }, [userInfo.user, user.id]);
  
  // const FriendSubmit = async () => {
  //   await dispatch(friending(user.id));
  //   await dispatch(login('', '', true));
  //   await dispatch(getFriendsList())
  //   await dispatch(getUsersList())
  // };

  return (
    <StyledTopBar>
      <div className="info">
        <Avatar alt="Remy Sharp" src={user.profile.avatar} ><span style={{textTransform: "uppercase" }}>{user.username.charAt(0)}</span></Avatar>
        <div className="name_online">
          <p className="username">{user.username}</p>
          <p className="online">2 days ago</p>
        </div>
      </div>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete" color="primary" sx={{ color: 'white' }}>
          <PhoneIcon />
        </IconButton>
        {/* {!friends ? (
          <IconButton
            onClick={FriendSubmit}
            aria-label="delete"
            color="primary"
            sx={{ color: 'white' }}
          >
            <PersonAddIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={FriendSubmit}
            aria-label="delete"
            color="primary"
            sx={{ color: 'white' }}
          >
            <PersonRemoveIcon />
          </IconButton>
        )} */}
      </Stack>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  display: flex;
  background-color: #282828;
  align-items: center;
  height: 2rem;
  padding: 0.7rem;
  justify-content: space-between;
  p {
    margin: 0;
  }
  .info {
    display: flex;
    justify-content: center;
    .name_online {
      margin-left: 0.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .username {
        font-size: 0.9rem;
      }
      .online {
        font-size: 0.7rem;
        color: #a7a7a7;
      }
    }
  }
`;

export default TopBar;

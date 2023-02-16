import { createGlobalStyle } from 'styled-components';
import MainBox from './screens/MainBox';
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from './screens/Register';
import Login from './screens/Login';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { useEffect } from 'react';
import { login, getUsersList, getChatUsersList } from './actions/userActions';

import { useState } from 'react';
import { getChat } from './actions/chatActions';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    background-color: #fff;
    background-color: #4d4d4d;
    a{
      all: unset;
      cursor: pointer;
    }
    .App{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;;
    }
  }
  *{
    font-family: 'Lato', sans-serif;
  }
`;
function App() {
  const userLogin = useSelector(state=>state.userLogin)
  const usersList = useSelector(state=>state.usersList)
  const userDetails = useSelector(state=>state.userDetails)
  const SearchFor = useSelector(state=>state.SearchFor)
  const userId = useSelector(state=>state.userId)
  const {userInfo, loading} = userLogin
  const {loading2} = usersList
  const {loading4} = userDetails
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function fetchUserData() {
    await dispatch(login("", "", true));
    await dispatch(getUsersList(SearchFor));
    await dispatch(getChatUsersList(SearchFor));
    if(userId!=null){
      await dispatch(getChat(userId));
      
    }
    
    
    
    // console.log("refresh");
  }
  useEffect(() => {
    if (!userInfo) {
    } else {
      fetchUserData();
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUserData()
      // console.log('Function called every 10 seconds');
    }, 10000/2); // 10000 ms = 10 seconds

    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [SearchFor]);
  return (
    <div className="App">
      <GlobalStyle />
      {(loading || loading2  || loading4  ) && <Loader/>}

      <Routes>
        
        <Route path='/' element={<MainBox />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      

      

    </div>
  );
}



export default App;

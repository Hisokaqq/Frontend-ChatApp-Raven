import {
    userLoginReducer,
    usersListReducer,
    userRegisterReducer,
    userDetailsReducer,
    usersChatListReducer,
    SearchForReducer,
    userIdReducer,

} from "./reducers/userReducer"
import {
    chatReducer,
    chatDetailsReducer,

} from "./reducers/chatReducer"
import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import {
    composeWithDevTools
} from "redux-devtools-extension"

const reducer = combineReducers({
    "userLogin": userLoginReducer,
    "usersChatList": usersChatListReducer,
    "usersList": usersListReducer,
    "userDetails": userDetailsReducer,
    "userRegister": userRegisterReducer,
    // "friendsList": friendsListReducer,

    "chats": chatReducer,
    "chat": chatDetailsReducer,
    "userId": userIdReducer,
    "SearchFor": SearchForReducer,

})

const UserInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: {
        userInfo: UserInfoFromStorage
    }
}

const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
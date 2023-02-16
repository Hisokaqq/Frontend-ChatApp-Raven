import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAIL,

    USERS_CHAT_LIST_REQUEST,
    USERS_CHAT_LIST_SUCCESS,
    USERS_CHAT_LIST_FAIL,

    FRIENDS_LIST_REQUEST,
    FRIENDS_LIST_SUCCESS,
    FRIENDS_LIST_FAIL,


} from "../constants/userConstaints";


export const userLoginReducer = (state = {
    userInfo: {

    }
}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true, ...state
            }
            case USER_LOGIN_SUCCESS:
                return {
                    loading: false, userInfo: action.payload
                }
                case USER_LOGIN_FAIL:
                    return {
                        loading: false, error: action.payload
                    }
                    case USER_LOGOUT:
                        return {

                        }
                        case USER_UPDATE_PROFILE_RESET:
                            return {
                                loading: false, userInfo: action.payload
                            }
                            default:
                                return state
    }
}

export const userRegisterReducer = (state = {
    userInfoR: null
}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true, ...state
            }
            case USER_REGISTER_SUCCESS:
                return {
                    loading: false, userInfo: action.payload
                }
                case USER_REGISTER_FAIL:
                    return {
                        loading: false, error: action.payload,
                    }

                    default:
                        return state
    }
}

export const userDetailsReducer = (state = {
    user: {

    }
}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                loading4: true, ...state
            }
            case USER_DETAILS_SUCCESS:
                return {
                    loading4: false, user: action.payload
                }
                case USER_DETAILS_FAIL:
                    return {
                        loading4: false, error: action.payload
                    }
                    default:
                        return state
    }
}


export const userUpdateProfileReducer = (state = {
    success: false
}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true,
            }
            case USER_UPDATE_PROFILE_SUCCESS:
                return {
                    loading: false, userInfo: action.payload, success: true
                }
                case USER_UPDATE_PROFILE_FAIL:
                    return {
                        loading: false, error: action.payload,
                    }


                    default:
                        return state
    }
}


export const usersListReducer = (state = {
    users: []
}, action) => {
    switch (action.type) {
        case USERS_LIST_REQUEST:
            return {
                loading2: true, ...state
            }
            case USERS_LIST_SUCCESS:
                return {
                    loading2: false, users: action.payload,
                }
                case USERS_LIST_FAIL:
                    return {
                        loading2: false, error: action.payload,
                    }
                    default:
                        return state
    }
}

export const usersChatListReducer = (state = {
    fusers: []
}, action) => {
    switch (action.type) {
        case USERS_CHAT_LIST_REQUEST:
            return {
                loading6: true, ...state
            }
            case USERS_CHAT_LIST_SUCCESS:
                return {
                    loading6: false, fusers: action.payload,
                }
                case USERS_CHAT_LIST_FAIL:
                    return {
                        loading6: false, error: action.payload,
                    }
                    default:
                        return state
    }
}

export const friendsListReducer = (state = {
    friends: []
}, action) => {
    switch (action.type) {
        case FRIENDS_LIST_REQUEST:
            return {
                loading3: true, ...state
            }
            case FRIENDS_LIST_SUCCESS:
                return {
                    loading3: false, friends: action.payload,
                }
                case FRIENDS_LIST_FAIL:
                    return {
                        loading3: false, error: action.payload,
                    }
                    default:
                        return state
    }
}

export const SearchForReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_TEXT":
            return action.payload

        default:
            return state;
    }
};

export const userIdReducer = (state = null, action) => {
    switch (action.type) {
        case "USER_ID":
            return action.payload

        default:
            return state;
    }
};
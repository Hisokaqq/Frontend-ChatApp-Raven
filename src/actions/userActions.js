import axios from "axios";
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




export const getUsersList = (search = "") => async (dispatch, getState) => {
    try {
        dispatch({
            type: USERS_LIST_REQUEST
        })
        const {
            userLogin: {
                userInfo
            },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {
            data
        } = await axios.get(
            `/api/users/all?search=${search}`,
            config
        )
        dispatch({
            type: USERS_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USERS_LIST_FAIL,
            payload: error.response && error.response.data.details ?
                error.response.data.details : error.message,
        })
    }
}

export const getChatUsersList = (search = "") => async (dispatch, getState) => {
    try {
        dispatch({
            type: USERS_CHAT_LIST_REQUEST
        })
        const {
            userLogin: {
                userInfo
            },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {
            data
        } = await axios.get(
            `/api/users/chatwith?search=${search}`,
            config
        )
        dispatch({
            type: USERS_CHAT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USERS_CHAT_LIST_FAIL,
            payload: error.response && error.response.data.details ?
                error.response.data.details : error.message,
        })
    }
}

// export const getFriendsList = () => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: FRIENDS_LIST_REQUEST
//         })
//         const {
//             userLogin: {
//                 userInfo
//             },
//         } = getState()
//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }
//         const {
//             data
//         } = await axios.get(
//             `/api/users/friends/`,
//             config
//         )
//         dispatch({
//             type: FRIENDS_LIST_SUCCESS,
//             payload: data,
//         })
//     } catch (error) {
//         dispatch({
//             type: FRIENDS_LIST_FAIL,
//             payload: error.response && error.response.data.details ?
//                 error.response.data.details : error.message,
//         })
//     }
// }

export const login = (username, password, update = false) => async (dispatch, getState) => {

    if (update) {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })
            const {
                userLogin: {
                    userInfo
                },
            } = getState()
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            const {
                data
            } = await axios.get(
                `/api/users/update/`,
                config
            )


            dispatch({
                type: USER_UPDATE_PROFILE_RESET,
                payload: data,
            })
            localStorage.setItem("userInfo", JSON.stringify(data))

        } catch (error) {

        }
    } else {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const {
                data
            } = await axios.post(
                "/api/users/login/", {
                    "username": username,
                    "password": password
                },
                config
            )
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            })
            localStorage.setItem("userInfo", JSON.stringify(data))

        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.details ?
                    error.response.data.details : error.message,
            })
        }
    }
}

export const register = (username, email, password, ) => async (dispatch) => {

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        const {
            data
        } = await axios.post(
            "/api/users/register/", {
                "username": username,
                "email": email,
                "password": password,
            },
            config
        )



        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.details ?
                error.response.data.details : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: {
                userInfo
            },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {
            data
        } = await axios.get(
            `/api/users/profile/${id}`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ?
                error.response.data.detail : error.message,
        })
    }
}

export const friending = (id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: {
                userInfo
            },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {
            data
        } = await axios.post(
            `/api/users/follow/${id}`, {},
            config
        )

    } catch (error) {

    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({
        type: USER_LOGOUT
    })
}

export const setText = (text) => ({
    type: "SET_TEXT",
    payload: text
});

export const setUserId = (text) => ({
    type: "USER_ID",
    payload: text
});
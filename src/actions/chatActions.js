import {
    CHATS_REQUEST,
    CHATS_SUCCESS,
    CHATS_FAIL,

    CHAT_REQUEST,
    CHAT_SUCCESS,
    CHAT_FAIL,

    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAIL,

} from "../constants/chatConstants";
import axios from "axios";

export const createMessage = (id, text) => async (dispatch, getState) => {
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
            `/api/chats/${id}/message/create/`, {
                "text": text
            },
            config
        )
    } catch (error) {

    }
}

export const getChats = (search = "") => async (dispatch, getState) => {
    try {
        dispatch({
            type: CHATS_REQUEST
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
            `/api/chats?search=${search}`,
            config
        )
        dispatch({
            type: CHATS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CHATS_FAIL,
            payload: error.response && error.response.data.details ?
                error.response.data.details : error.message,
        })
    }
}


export const getChat = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CHAT_REQUEST
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
            `/api/chats/${id}`,
            config
        )
        dispatch({
            type: CHAT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CHAT_FAIL,
            payload: error.response && error.response.data.details ?
                error.response.data.details : error.message,
        })
    }
}
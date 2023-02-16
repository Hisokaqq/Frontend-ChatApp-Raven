import {
    CHATS_REQUEST,
    CHATS_SUCCESS,
    CHATS_FAIL,

    CHAT_REQUEST,
    CHAT_SUCCESS,
    CHAT_FAIL,
} from "../constants/chatConstants";

export const chatReducer = (state = {
    chats: []
}, action) => {
    switch (action.type) {
        case CHATS_REQUEST:
            return {
                loading5: true, ...state
            }
            case CHATS_SUCCESS:
                return {
                    loading5: false, chats: action.payload
                }
                case CHATS_FAIL:
                    return {
                        loading5: false, error: action.payload
                    }
                    default:
                        return state
    }
}

export const chatDetailsReducer = (state = {
    chat: {
        messages: []
    }
}, action) => {
    switch (action.type) {
        case CHAT_REQUEST:
            return {
                loading5: true, ...state
            }
            case CHAT_SUCCESS:
                return {
                    loading5: false, chat: action.payload
                }
                case CHAT_FAIL:
                    return {
                        loading5: false, error: action.payload
                    }
                    default:
                        return state
    }
}
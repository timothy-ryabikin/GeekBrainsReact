import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: [
        { id: "chat1", name: "Чат 1" },
        { id: "chat2", name: "Чат 2" },
        { id: "chat3", name: "Чат 3" }],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            };
        default:
            return state;
    }
};

export default chatsReducer;
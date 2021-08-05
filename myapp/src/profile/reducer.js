import { PROFILE_ACTION } from "./actions"

const initialState = {
    showName: false,
    name: 'Tima'
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}


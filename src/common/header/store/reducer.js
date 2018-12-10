import { constants } from './index';

const defaultState = {
    focused: false
}

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = true;
        return newState;
    }
    if (action.type === constants.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = false;
        return newState;
    }
    return state;
}

export default reducer;
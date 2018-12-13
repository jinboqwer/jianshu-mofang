import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.SEARCH_GET_LIST:
            return state.set('list', action.data);
        default: 
            return state;
    }  
}

export default reducer;
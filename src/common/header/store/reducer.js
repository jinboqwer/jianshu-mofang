import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage:1,
    mouseIn: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.SEARCH_GET_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.HANDLE_ON_MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.HANDLE_ON_MOUSE_LEAVE:
            return state.set('mouseIn', false); 
        case constants.HANDLE_ON_CLICK:
            return state.set('page', action.page);
            
        default: 
            return state;
    }  
}

export default reducer;
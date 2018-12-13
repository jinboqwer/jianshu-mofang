import { constants } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchGetList = (data) => ({
    type: constants.SEARCH_GET_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
}) 
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
}) 

export const  searchList = () => {
    return (dispatch) => {
        axios.get('/api/data.json').then((res) => {
            const data = res.data.data;
            dispatch(searchGetList(data));
        }).catch((error) => {
            console.log(error);
            });
    }
}

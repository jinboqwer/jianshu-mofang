import { constants } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchGetList = (data) => ({
    type: constants.SEARCH_GET_LIST,
    data: fromJS(data),
    totalPage : Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
}) 
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
}) 

export const handleOnMouseEnter = () => ({
    type: constants.HANDLE_ON_MOUSE_ENTER
}) 

export const handleOnMouseLeave = () => ({
    type: constants.HANDLE_ON_MOUSE_LEAVE
}) 

export const handleOnClick = (page) => (

{
    type: constants.HANDLE_ON_CLICK,
    page: page

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

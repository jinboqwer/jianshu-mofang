import { constants } from './index';
import axios from 'axios';

export const  searchFocus = () => ({
    type: constants.SEARCH_FOCUS
}) 
export const  searchBlur = () => ({
    type: constants.SEARCH_BLUR
}) 

export const  searchList = () => {
    return (dispath) => {
        axios.get('./data.json').then((ref) => {
            console.log(ref);
        })
    }
}

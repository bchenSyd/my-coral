import { combineReducers } from 'redux';
import pageConfigReducer from '../pageConfig';

export default combineReducers({
    pageConfig: pageConfigReducer
});

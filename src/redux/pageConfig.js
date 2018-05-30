import fetch from '../common/fetch';
import { createActions, handleActions } from 'redux-actions';

const { loadpageconfigStart: startLoading, loadpageconfigComplete: completeLoading } = createActions({
    LOADPAGECONFIG_START: () => ({}),
    LOADPAGECONFIG_COMPLETE: payload => ({ payload })
});

const reducer = handleActions({
    [startLoading]: state => ({ ...state, loading: true }),
    [completeLoading]: (state, { payload }) => ({
        ...state,
        loading: false,
        entities: { ...payload }
    })
},
    {
        loading: false,

    });
export default reducer;

export const loadPageConfig = url => dispatch => {
    dispatch(startLoading())
    fetch(url)
        .then(result => {
            // debugger;
            dispatch(completeLoading(result))
        })
}

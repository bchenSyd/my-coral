import fetch from '../common/fetch';
import { createActions, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const { loadpageconfigStart: startLoading, loadpageconfigComplete: completeLoading } = createActions({
    LOADPAGECONFIG_START: undefined,
    LOADPAGECONFIG_COMPLETE: undefined // if null or undefined, use identity function by defualt;
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
        entities:{
            pages:[]
        }
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

const entitySelector = state => state.pageConfig.entities;
export const pageSelector = createSelector(
    entitySelector,
    entities => {
        const pages = entities.pages;
        return {
            homePage: pages[0],
            allPages: pages
        }
    }
)

export const tileGroupsSelector = pageName =>createSelector(
    entitySelector,
    ({pages, tileGroups} )=>{
        const page = pages.find(p=>p.name === pageName);
        return page.tileGroups.map(tg=> tileGroups.find(t=>t.id === tg));
    }
)
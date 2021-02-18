import { createActions, handleActions } from "redux-actions";
import { createSelector } from "reselect";
import fetch from "../common/fetch";

const {
  loadpageconfigStart /* #name: this must match with #key */: startLoading,
  loadpageconfigComplete: completeLoading
} = createActions({
  LOADPAGECONFIG_START /* #key: catch!! this must match with #name after 1. trim underscore 2. camalCase   */: undefined,

  LOADPAGECONFIG_COMPLETE: undefined // if null or undefined, use identity function by defualt;
});

const reducer = handleActions(
  {
    [startLoading]: state => ({ ...state, loading: true }),
    [completeLoading]: (state, { payload }) => ({
      ...state,
      loading: false,
      entities: { ...payload }
    })
  },
  {
    loading: false,
    entities: {
      pages: []
    }
  }
);
export default reducer;

export const loadPageConfig = url => dispatch => {
  dispatch(startLoading());
  fetch(url).then(result => {
    // debugger;
    dispatch(completeLoading(result));
  });
};

const entitySelector = state => state.pageConfig.entities;
export const pageSelector = createSelector(
  entitySelector,
  entities => {
    const { pages } = entities;
    return {
      homePage: pages[0],
      allPages: pages
    };
  }
);

export const cardGroupsSelector = pageName =>
  createSelector(
    entitySelector,
    ({ pages, cardGroups }) => {
      const page = pages.find(p => p.name === pageName);
      return page.cardGroups.map(cg => cardGroups.find(t => t.id === cg));
    }
  );

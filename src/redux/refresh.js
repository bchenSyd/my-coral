import { createAction, handleActions } from "redux-actions";

export const refreshPage = createAction("REFRESH_PAGE");

const refreshReducer = (state, { payload }) => ({
  ...state,
  required: payload
});

const reducer = handleActions(
  {
    [refreshPage]: "1" === "1" ? refreshReducer : state => state // eslint-disable-line
  },
  { required: false }
);

export default reducer;

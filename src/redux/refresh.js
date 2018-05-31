import { createAction, handleAction } from "redux-actions";

export const refreshPage = createAction("REFRESH_PAGE");
const reducer = handleAction(
  refreshPage,
  (state, { payload }) => {
    return { ...state, required: payload };
  },
  { required: false }
);

export default reducer;

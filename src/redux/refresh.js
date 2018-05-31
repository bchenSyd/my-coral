import { createAction, handleAction } from "redux-actions";

export const refreshPage = createAction("REFRESH");

const reducer = handleAction(
  refreshPage,
  state => {
    return { ...state, required: true };
  },
  { refresh: false }
);

export default reducer;

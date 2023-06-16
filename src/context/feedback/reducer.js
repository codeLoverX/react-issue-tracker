import { feedbackActionTypes as actions } from "./actions";

export const feedbackReducer = (state, action) => {
  switch (action.type) {
    
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

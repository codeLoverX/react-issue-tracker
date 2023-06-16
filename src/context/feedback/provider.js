import { useMemo, useReducer, useContext, createContext } from "react";
import { initialFeedbackState } from "./initalState";
import { feedbackReducer } from "./reducer";
import { feedbackActionTypes as actions } from "./actions";

export const FeedbackContext = createContext();
FeedbackContext.displayName = "FeedbackState";

export const FeedbackContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialFeedbackState);

  const value = useMemo(
    () => ({
      ...state,
      setLoading: (loading) => {
        dispatch({ type: actions.SET_LOADING, loading});
      },
      
    }),
    [state, dispatch]
  );

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
};

export const useFeedbackContext = () => useContext(FeedbackContext);

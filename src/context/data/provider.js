import { useMemo, useReducer, useContext, createContext } from "react";
import { initialDataState } from "./initalState";
import { dataReducer } from "./reducer";
import { dataActionTypes as actions } from "./actions";

export const DataContext = createContext();
DataContext.displayName = "DataState";

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  const value = useMemo(
    () => ({
      ...state,
      setList: (issueList) => {
        console.log({list: issueList})
        dispatch({ type: actions.SET_LIST, issueList});
      },
      addList: (newIssue) => {
        dispatch({ type: actions.ADD_LIST, newIssue });
      },
      deleteList: (id) => {
        dispatch({ type: actions.DELETE_LIST, id});
      },
      editList: (id, editIssue) => {
        dispatch({ type: actions.EDIT_LIST, id, editIssue });
      },
      setPage: ({limit, offset}) => {
        dispatch({ type: actions.SET_PAGE, limit, offset });
      },
    }),
    [state, dispatch]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);

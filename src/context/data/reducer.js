import { dataActionTypes as actions } from "./actions";
import { paginateHelper } from "../../utils/paginate";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LIST:
      console.log({actions})
      return {
        ...state,
        issueList: action.issueList,
        page: { 
            ...paginateHelper(state?.page || 1, state?.limit || 5, action?.issueList || [])
        }
      };
    case actions.ADD_LIST:
      const newList = [...state.issueList, action.newIssue]
      return {
        ...state,
        issueList: newList,
        ...paginateHelper(newList, state?.limit, state?.issueList )
      };
    case actions.DELETE_LIST:
       const deletedIssue = state.issueList.filter(value => value._id !== action.id) 

      return {
        ...state,
        issueList: deletedIssue,
        ...paginateHelper(deletedIssue, state?.limit, state?.issueList )
      };
    case actions.EDIT_LIST:
        const editedList =  state.issueList.map(value => {
            return value._id != action.id ? value : action.editIssue
        })
      return {
        ...state,
        issueList: editedList,
        ...paginateHelper(editedList, state?.limit, state?.issueList )
      };
      
    case actions.SET_PAGE: 
      return {
        ...state,
        limit: action?.limit || state.limit,
        offset: action?.offset || state.offset
      }
    default:
      return state;
  }
};

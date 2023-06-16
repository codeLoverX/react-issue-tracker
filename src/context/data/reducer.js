import { dataActionTypes as actions } from "./actions";
import { paginateHelper, paginateLastPageHelper } from "../../utils/paginate";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LIST:
      return {
        ...state,
        issueList: action.issueList,
        issuePage: paginateHelper(state.pageNumber, state.limit, action.issueList)

      };
    case actions.ADD_LIST:
      action.newIssue.id = state.issueList[state.issueList.length-1].id+1
      const newList = [...state.issueList, action.newIssue]
      const newPage = paginateLastPageHelper(state.limit, newList)
      return {
        ...state,
        issueList: newList,
        issuePage: newPage,
        pageNumber: newPage.totalPages,
      };
    case actions.DELETE_LIST:
      const deletedIssue = state.issueList.filter(value => value.id !== action.id)

      return {
        ...state,
        issueList: deletedIssue,
        issuePage: paginateHelper(state.pageNumber, state.limit, deletedIssue)
      };
    case actions.EDIT_LIST:
      const editedList = state.issueList.map(value => {
        return value.id != action.id ? value : action.editIssue
      })
      return {
        ...state,
        issueList: editedList,
        issuePage: paginateHelper(state.pageNumber, state.limit, editedList)
      };

    case actions.SET_PAGE_DETAILS:
      console.log({ action })
      const {limit, pageNumber} = action.pageDetailsObj     
      return {
        ...state,
        limit: limit || state.limit,
        pageNumber: pageNumber || state.pageNumber,
        issuePage: paginateHelper(pageNumber || state.pageNumber, limit || state.limit, state.issueList)
      }

    case actions.SET_CURRENT_ISSUE:

      const currentIssue = action.issueId == -1 ? null :
        state.issueList.filter(
          (value) => {
            return value.id == action.issueId
          }
        )
      return {
        ...state,
        currentIssue: currentIssue !== null ? currentIssue[0] : null
      };
    default:
      return state;
  }
};

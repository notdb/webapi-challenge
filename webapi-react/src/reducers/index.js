import { PROJECT_START, PROJECT_SUCCESS, PROJECT_ERROR } from "../actions";

const initialState = {
  projects: [],
  fetching_projects: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_START:
      return {
        ...state,
        fetching_projects: true,
        error: ""
      };
    case PROJECT_SUCCESS:
      return {
        ...state,
        fetching_projects: false,
        projects: action.payload
      };
    case PROJECT_ERROR:
      return {
        ...state,
        fetching_projects: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

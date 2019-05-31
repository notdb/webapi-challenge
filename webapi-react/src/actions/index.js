import axios from "axios";

export const PROJECT_START = "PROJECT_START";
export const PROJECT_SUCCESS = "PROJECT_SUCCESS";
export const PROJECT_ERROR = "PROJECT_ERROR";

export const loadProjects = () => dispatch => {
  dispatch({ type: PROJECT_START });
  axios
    .get("http://localhost:4000/projects")
    .then(res => {
      console.log(res.data);
      dispatch({ type: PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: PROJECT_ERROR });
    });
};

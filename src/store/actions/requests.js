import * as actionTypes from "./actionTypes";

export const requestRobots = () => dispatch => {
    dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: actionTypes.REQUEST_ROBOTS_SUCCESS,
                payload: data
            })
        )
        .catch(error =>
            dispatch({
                type: actionTypes.REQUEST_ROBOTS_FAILED,
                payload: error
            })
        );
};

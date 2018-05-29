import * as actionTypes from "../actions/actionTypes";

const initialStateSearch = {
    searchField: ""
};

export const searchRobots = (state = initialStateSearch, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: null
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case actionTypes.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robots: action.payload
            };
        case actionTypes.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        default:
            return state;
    }
};

import * as actionTypes from "../actions/actionTypes";

const initialState = {
    searchField: ""
};

export const searchRobots = (state = initialState, action) => {
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

import React from "react";

const SearchBox = props => {
    return (
        <input
            type="search"
            placeholder="search robots"
            onChange={props.onSearchChange}
        />
    );
};

export default SearchBox;

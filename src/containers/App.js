import React, { Component } from "react";
import { setSearchField } from "../store/actions/search";
import { connect } from "react-redux";

import "./App.css";
// import robots from "./assets/robots";

import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
            .catch(err => console.log(err));
    }

    // handleSearchChange = event => {
    //     this.setState({
    //         searchField: event.target.value
    //     });
    // };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">RoboFriends</h1>
                    <SearchBox onSearchChange={this.props.onSearchChange} />
                </header>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

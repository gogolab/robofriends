import React, { Component } from "react";
import { setSearchField } from "../store/actions/search";
import { requestRobots } from "../store/actions/requests";
import { connect } from "react-redux";

import "./App.css";
// import robots from "./assets/robots";

import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";

class App extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     robots: []
        // };
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }))
        //     .catch(err => console.log(err));

        this.props.onRequestRobots();
    }

    // handleSearchChange = event => {
    //     this.setState({
    //         searchField: event.target.value
    //     });
    // };

    render() {
        const filteredRobots = this.props.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });

        return this.props.isPending ? (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">RoboFriends</h1>
                    <h2>Pending...</h2>
                </header>
            </div>
        ) : (
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
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

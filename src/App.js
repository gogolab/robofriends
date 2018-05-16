import React, { Component } from "react";
import "./App.css";
// import robots from "./assets/robots";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
            .catch(err => console.log(err));
    }

    handleSearchChange = event => {
        this.setState({
            searchField: event.target.value
        });
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">RoboFriends</h1>
                    <SearchBox onSearchChange={this.handleSearchChange} />
                </header>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;

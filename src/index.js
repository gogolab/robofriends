import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { searchRobots } from "./store/reducers/reducer";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

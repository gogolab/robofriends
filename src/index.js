import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { searchRobots } from "./store/reducers/reducer";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

const logger = createLogger();

const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

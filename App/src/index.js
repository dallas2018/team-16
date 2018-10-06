/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import PageRouter from "Pages/PageRouter";
import registerServiceWorker from "registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

ReactDOM.render(<PageRouter />, document.getElementById("root"));
registerServiceWorker();

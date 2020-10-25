import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./../src/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

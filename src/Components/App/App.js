import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./../../reducers";
import "./App.scss";

const store = createStore(rootReducer, composeWithDevTools());

window.store = store;

function App() {
  return (
    <div>
      <h1>It Works</h1>
    </div>
  );
}

export default App;

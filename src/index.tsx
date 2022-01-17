import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import RoutesComponent from "./routes/RoutesComponent";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// React
import React from "react";
import ReactDOM from "react-dom";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Routes
import Routes from "./Routes";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Components/Reducers/index";

import { ContextProvider } from "./Context";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // <React.StrictMode>
  <ContextProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

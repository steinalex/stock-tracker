import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles/Global.css";
import "./styles/Variables.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { bootstrap } from "./store/actions";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { socketService } from "services";
import { Rig } from "./Rig";

ReactDOM.render(<Rig />, document.getElementById("root"));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root"),
//   () => store.dispatch(bootstrap())
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

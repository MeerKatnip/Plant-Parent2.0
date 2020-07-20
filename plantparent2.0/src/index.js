import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Tabs, Tab } from "react-bootstrap";
import "./index.css";
import PlantMain from "./PlantMain";
import * as serviceWorker from "./serviceWorker";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Plants from "./components/Plants";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import PlantDetails from "./components/PlantDetails";
import NewUser from "./components/NewUser";
import Register from "./components/RegistrationForm/Register"
import DisplayUsers from "./components/DisplayUsers";
import UserInput from "./components/UserInput";
// import CtrRedux from "./components/CtrRedux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BaseLayout>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={PlantMain} path="/plantmain" />
            <Route component={PlantDetails} path="/plantdetails/:vegetableId" />
            <Route component={NewUser} path="/newuser" />
            <Route component={ContactUs} path="/contact" />
            <Route component={Register} path="/register" />
          </Switch>
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

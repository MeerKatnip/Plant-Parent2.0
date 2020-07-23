import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PlantMain from "./PlantMain";
import * as serviceWorker from "./serviceWorker";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Plants from "./components/Plants";
import AboutUs from "./components/AboutUs";
import Home from './components/Home'
import NewUser from './components/NewUser'
import PlantDetails from "./components/PlantDetails";
import Register from "./components/RegistrationForm/Register"
import Login from './components/LoginForm/Login'
import MyGreenhouse from './components/MyGreenhouse'
import AlertComponent from './components/AlertComponent/AlertComponent'
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
    <BrowserRouter >
      <Provider store={store}>
        <BaseLayout>
          <Switch>
            <Route component={PlantMain} path="/" exact />
            <Route component={PlantMain} path="/plantmain" />
            <Route component={PlantDetails} path="/plantdetails/:vegetableId" />
            <Route component={AboutUs} path="/aboutus" />
            <Route component={Register} path="/register" />
            <Route component={Login} path="/login" />
            <Route component={MyGreenhouse} path="/mygreenhouse" />
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

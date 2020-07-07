import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PlantMain from "./PlantMain";
import * as serviceWorker from "./serviceWorker";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Plants from "./components/Plants";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={PlantMain} path="/plantmain" />
          <Route component={ContactUs} path="/contact" />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

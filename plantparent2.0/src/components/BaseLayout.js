import React from "react";
import { Route, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"
import Menu from "../components/Menu";
import { Loading } from "./loading"
import { Home, Profile, ExternalApi } from "../views"
import { useAuth0 } from "@auth0/auth0-react"

// import Counter from "../components/Counter";
// import Plants from "../components/Plants";
// import TextInput from "../components/TextInput";
// import PlantMain from "../PlantMain";
// import Home from "../components/Home";
// import AnotherCounter from "./AnotherCounter";



  const BaseLayout = () => {
    const { isLoading } = useAuth0()

    if(isLoading) {
      return <Loading />
    }
    return (
      <div>
        <Menu />

        {this.props.children}
        <a href="http://www.amycodes.me">Amycodes.me 2020</a>
      </div>
    );
}

export default BaseLayout;

//allows child to update parent using a callback function, baselayout.js is parent and counter.js is child

//child cannot directly talk to siblings, which are other child components. But the child can talk to the parent, and the parent can talk to the sibling child.

//AnotherCounter.js is the sibling of counter.js. Pass the properties from the parent to the additional child.

//to reduce chaining, you can set a Global State/Redux. This allows any children to access the properties without having to back out through multiple parents.

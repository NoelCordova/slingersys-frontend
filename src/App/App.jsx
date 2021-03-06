import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

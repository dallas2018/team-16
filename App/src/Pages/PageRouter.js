import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "Pages/Landing/Landing";

class PageRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;

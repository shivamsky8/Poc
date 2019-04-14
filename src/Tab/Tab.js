import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Priority from '../Priority/Priority'

const TabComponent=()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Priority" component={Link} to="/" />
                <Tab label="C-box" component={Link} to="/C-box" />
                <Tab label="Draft" component={Link} to="/Draft" />
                <Tab label="Sent" component={Link} to="/Sent" />
                <Tab label="Folder" component={Link} to="/Folder" />
                
              </Tabs>
              <Switch>
              <Route path="/C-box" render={() => <div>C-box</div>} />
               <Route path="/Draft" render={() => <div>Draft</div>} />
                <Route path="/Sent" render={() => <div>Sent</div>} />
                <Route path="/Folder" render={() => <div>Folder</div>} />
                <Route path="/" render={() => <Priority/>} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default TabComponent;

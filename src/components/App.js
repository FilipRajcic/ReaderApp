import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import ResultScreen from "./screens/ResultScreen";
import history from "../history";
import MyBooksScreen from "./screens/MyBooksScreen";
import BookScreenDetail from "./screens/BookScreenDetail";
// Main App Component
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          {/* Header is always showing no matter what page u are on */}
          <Header />
          {/* there be only 1 screen shown on the page */}
          <Switch>
            {/* my page routes */}
            <Route path="/" exact component={MyBooksScreen} />
            <Route path="/screen/results" exact component={ResultScreen} />
            <Route
              path="/screen/result/works/:key"
              exact
              component={BookScreenDetail}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

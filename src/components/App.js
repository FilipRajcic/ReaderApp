import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import ResultScreen from "./screens/ResultScreen";
import history from "../history";
import BookScreen from "./screens/BookScreen";
import MyBooksScreen from "./screens/MyBooksScreen";
// Main App Component
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={MyBooksScreen} />
            <Route path="/screen/results" exact component={ResultScreen} />
            <Route path="/screen/result/:key" exact component={BookScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

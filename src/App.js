import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInfo from "./components/UserInfo/userinfo";
import LandingPage from "./components/LandingPage/LandingPage";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import SearchPage from "./components/SearchPage/SearchPage";
import UserTile from "./components/UserTiles/UserTile/UserTile";
function App() {
  const [auth, setAuth] = useState(false);
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
        }
      />
    );
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={UserInfo} />
        </Switch>
      </Router>
      <LandingPage />
    </div>
  );
}

export default App;

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
import UserFilter from "./components/UserFilter/UserFilter";
import UserTile from "./components/UserTiles/UserTile/UserTile";
import SearchPage from "./components/SearchPage/SearchPage";
import { UseContext } from "./UseContext";

function App() {
  const [value, setValue] = useState("hello");
  const [auth, setAuth] = useState(true);
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
          <UseContext.Provider>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute
              exact
              path="/Profile"
              component={UserInfo}
              auth={auth}
            />
            <PrivateRoute
              exact
              path="/Messages"
              component={UserTile}
              auth={auth}
            />
            <PrivateRoute
              exact
              path="/SearchPage"
              component={SearchPage}
              auth={auth}
            />
          </UseContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { createContext, useReducer } from "react";
import userReducer from "./userReducer";
import testData from "./assets/single_user.json";

const initialState = {
  user: {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  //Actions
  async function getUser() {
    try {
      //api call
      const res = testData;
      console.log("from context");
      console.log(res);
      //dispatch res data to action as payload
      dispatch({ type: "GET_USER", payload: res });
    } catch (error) {
      console.log("get user error");
    }
  }

  async function getRecentOnlineUsers() {
    try {
      //api call

      //dispatch res data to action as payload
      dispatch({ type: "", payload: "" });
    } catch (error) {
      //dispatch error action?
    }
  }

  async function getFilteredUsers() {
    try {
      //api call
      const res = {};
      //dispatch res data to action as payload
      dispatch({ type: "", payload: "" });
    } catch (error) {
      //dispatch error action?
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
        getRecentOnlineUsers,
        getFilteredUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// The Provider component is what makes the state available to all child components,
// no matter how deeply nested they are within the component hierarchy.
// The Provider component receives a value prop. This is where we’ll pass our current value
// const { Provider, Consumer } = UserContext;

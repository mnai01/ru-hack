import React, { createContext, useReducer } from "react";
import userReducer from "./userReducer";
import axios from "axios";
import testData from "./assets/single_user.json";

const initialState = {
  currentUser: {},
  onlineUsers: [],
  selectedUser: {},
  loading: true,
};

export const UserContext = createContext(initialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  //Actions
  async function getCurrentUser(data) {
    try {
      const res = await axios.post(
        "https://far-friends.herokuapp.com/api/auth",
        data
      );
      console.log("from context");
      console.log(res.data);
      //dispatch res data to action as payload
      dispatch({ type: "GET_CURRENT_USER", payload: res.data });
    } catch (error) {
      console.log("get user error");
    }
  }

  async function getOnlineUsers() {
    try {
      const res = await axios.get(
        "https://far-friends.herokuapp.com/api/users"
      );
      console.log("from context");
      console.log(res.data);
      //dispatch res data to action as payload
      dispatch({ type: "GET_ONLINE_USERS", payload: res });
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

  async function getFilteredUsers(
    minAge,
    maxAge,
    gender,
    location,
    language,
    hasPhoto,
    username
  ) {
    try {
      //api call
      const URL = `https://far-friends.herokuapp.com/api/users/search?minAge=${minAge}&maxAge=${maxAge}&gender=${gender}&country=${location}&language=${language}&hasPhoto=${hasPhoto}&username=${username}`;
      console.log(URL);
      const res = await axios.get(URL);
      console.log("from context");
      console.log(res.data);
      //dispatch res data to action as payload
      dispatch({ type: "GET_FILTERED_USERS", payload: res.data });
    } catch (error) {
      //dispatch error action?
    }
  }

  async function getUserById(props) {
    try {
      const res = await axios.get(
        "https://far-friends.herokuapp.com/api/users/" + props
      );
      console.log("from context");
      console.log(res.data);
      let data = res.data;
      //dispatch res data to action as payload
      dispatch({ type: "GET_USER_BY_ID", payload: data });
    } catch (error) {
      //dispatch error action?
    }
  }

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        onlineUsers: state.onlineUsers,
        selectedUser: state.selectedUser,
        loading: state.loading,
        getCurrentUser,
        getOnlineUsers,
        getRecentOnlineUsers,
        getFilteredUsers,
        getUserById,
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

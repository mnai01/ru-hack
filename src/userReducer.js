export default (state, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case "GET_ONLINE_USERS":
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        onlineUsers: action.payload.data,
      };
    case "GET_RECENT_ONLINE_USERS":
      return {
        ...state,
        loading: false,
      };
    case "GET_FILTERED_USERS":
      return {
        ...state,
        loading: false,
        onlineUsers: action.payload,
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        loading: false,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

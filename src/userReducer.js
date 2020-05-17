export default (state, action) => {
  switch (action.type) {
    case "GET_USER":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "GET_RECENT_ONLINE_USERS":
      return {
        ...state,
      };
    case "GET_FILTERED_USERS":
      return {
        ...state,
      };
    default:
      return state;
  }
};

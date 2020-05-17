import React, { useState, useEffect, useContext } from "react";
import UserTile from "./UserTile/UserTile";
import { UserContext } from "../../userContext";

const UserTiles = () => {
  const { onlineUsers } = useContext(UserContext);
  const users = onlineUsers.map((user) => {
    return (
      <li>
        <UserTile user={user} />
      </li>
    );
  });

  return <ul>{users}</ul>;
};

export default UserTiles;

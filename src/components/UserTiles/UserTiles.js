import React, { useState, useEffect, useContext } from "react";
import UserTile from "./UserTile/UserTile";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContext";

const UserTiles = () => {
  const { onlineUsers } = useContext(UserContext);
  const users = onlineUsers.map((user) => {
    return (
      <Link key={user.id} to={"/Profile/" + user.id}>
        <UserTile user={user} />
      </Link>
    );
  });

  return users;
};

export default UserTiles;

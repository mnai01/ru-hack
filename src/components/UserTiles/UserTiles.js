import React, { useState, useEffect } from "react";
import UserTile from "./UserTile/UserTile";
import data from "../../assets/Data.json";
const UserTiles = () => {
  useEffect(() => {
    setData(data);
    console.log(data);
  }, []);
  const [data, setData] = useState();
  return (
    <div>
      <UserTile />
    </div>
  );
};

export default UserTiles;

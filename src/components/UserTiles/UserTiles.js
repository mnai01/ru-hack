import React, { useState, useEffect, useContext } from "react";
import UserTile from "./UserTile/UserTile";
import data from "../../assets/Data.json";

const UserTiles = () => {
<<<<<<< HEAD
  // let msg = userContext(userContext);
=======
  let msg = useContext(userContext);
>>>>>>> 2a890f6f5390be3180799cfb4b6e8806f74a788d

  useEffect(() => {
    setData(data);
    console.log(data);
    //console.log("this is msg " + msg);
  }, []);

  const [data, setData] = useState();
  return (
    <div>
      <UserTile />
    </div>
  );
};

export default UserTiles;

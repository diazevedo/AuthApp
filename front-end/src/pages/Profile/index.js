import React from "react";
import { useAuthState } from "../../Context/Auth";

const Profile = () => {
  const { user } = useAuthState();
  console.log(user);
  React.useEffect(() => {}, []);

  return <h1>Profile</h1>;
};

export default Profile;

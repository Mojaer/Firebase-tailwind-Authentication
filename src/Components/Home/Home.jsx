import React, { useContext } from "react";
import { authContext } from "../../Context/AuthProvider.jsx";

const Home = () => {

  const { user } = useContext(authContext)
  // console.log(user)


  return (
    <div className="px-4">
      Home
    </div>

  );
};

export default Home;

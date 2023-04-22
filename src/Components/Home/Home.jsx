import React, { useContext } from "react";
import { authContext } from "../../Context/AuthProvider.jsx";

const Home = () => {

  const name = useContext(authContext)
  console.log(name)


  return (
    <div className="px-4">
      Home
    </div>

  );
};

export default Home;

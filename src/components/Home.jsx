import React from "react";
import Header from "./Header";
import Items from "./Items";
import AboutCard from "./AboutCard";
import Offer from "./Offer";
import { useAuth } from "../AuthContext";

const Home = () => {
  const {user} = useAuth();
  console.log("USE",user);
  if(!user){
    window.location.href = '/signin'
  }
  return (
    <div>
      <Header />
      <Items />
      <AboutCard />
      <Offer />
    </div>
  );
};

export default Home;

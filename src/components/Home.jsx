import React from "react";
import Header from "./Header";
import Items from "./Items";
import AboutCard from "./AboutCard";
import SignIn from './SignIn'
import Offer from "./Offer";
import { useAuth } from "../AuthContext";

const Home = () => {
  const { user } = useAuth();

  // Check if the user is not authenticated
  if (!user) {
    // Redirect to the /signin page
    // Return null or a message if you don't want to render anything
    return <SignIn />;
  }

  // Render the content for authenticated users
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

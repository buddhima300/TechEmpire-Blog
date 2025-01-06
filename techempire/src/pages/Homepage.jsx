import React from "react";
import Navbar from "../home components/Navbar";
import RecentPostCard from "../home components/RecentPostCard";

function Homepage() {
  return (
    <div className="mx-[10%]">
      <Navbar />
      <RecentPostCard />
    </div>
  );
}

export default Homepage;

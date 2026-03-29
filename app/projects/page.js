import Bottom from "@/component/Bottom";
import Navbar from "@/component/Navbar";
import Wish from "@/component/Wish";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Wish/>
      <Bottom />
    </div>
  );
};

export default page;

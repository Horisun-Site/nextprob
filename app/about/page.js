import React from "react";
import Navbar from "@/component/Navbar";
import First from "@/component/First";
import Ash from "@/component/Ash";
import Bottom from "@/component/Bottom";
import Slap from "@/component/Slap";

const page = () => {
  return (
    <div>
      <Navbar />
      <First/>
      <Ash/>
      <Slap/>
      <Bottom/>
    </div>
  );
};

export default page;

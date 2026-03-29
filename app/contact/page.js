import React from "react";
import Navbar from "@/component/Navbar";
import Bottom from "@/component/Bottom";
import Scap from "@/component/Scap";
import Top from "@/component/Top";

const page = () => {
  return (
    <div>
      <Navbar />
      <Top/>
      <Scap/>
      <Bottom/>
    </div>
  );
};

export default page;

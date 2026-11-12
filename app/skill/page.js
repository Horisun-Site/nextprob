import Asap from "@/component/Asap";
import Bottom from "@/component/Bottom";
import Flat from "@/component/Flat";
import Navbar from "@/component/Navbar";
import React from "react";

export const metadata = {
  title: "Skills",
  description:
    "The full-stack, design, engineering and digital growth toolkit of The Genesis.",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Flat/>
      <Asap/>
      <Bottom/>
    </div>
  );
};

export default page;

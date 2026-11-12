import React from "react";
import Navbar from "@/component/Navbar";
import First from "@/component/First";
import Ash from "@/component/Ash";
import Bottom from "@/component/Bottom";
import Slap from "@/component/Slap";

export const metadata = {
  title: "About",
  description:
    "Meet The Genesis — a full-stack developer, computer engineer, designer and digital growth specialist.",
};

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

import Bottom from "@/component/Bottom";
import Navbar from "@/component/Navbar";
import Wish from "@/component/Wish";
import React from "react";

export const metadata = {
  title: "Projects",
  description:
    "Selected websites, apps and digital products built by The Genesis.",
};

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

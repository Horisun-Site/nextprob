import React from "react";
import Navbar from "@/component/Navbar";
import Bottom from "@/component/Bottom";
import Scap from "@/component/Scap";
import Top from "@/component/Top";

export const metadata = {
  title: "Contact",
  description:
    "Start a project, ask a question or learn coding with The Genesis.",
};

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

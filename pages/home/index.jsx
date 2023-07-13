import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import React from "react";

const index = () => {
  return <div>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About/> 
  </div>;
};

export default index;

import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import React from "react";
import Reservation from "@/components/Reservation";

const index = () => {
  return <div>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About/>
    <Reservation/> 
  </div>;
};

export default index;

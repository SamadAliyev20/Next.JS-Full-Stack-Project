import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import React from "react";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const index = () => {
  return <React.Fragment>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About/>
    <Reservation/>
    <Customers/> 
  </React.Fragment>;
};

export default index;

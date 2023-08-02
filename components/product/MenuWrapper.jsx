import { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({categories}) => {
  const [active, setActive] = useState(0);
  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center  w-full">
      <Title addClass="text-[40px]">Our Menu</Title>
      <div className="mt-10">
       {
         categories.map((category, index) => (
          <button onClick={() => setActive(index)} key={category._id} className={`px-6 py-2 rounded-3xl ${index === active  && "bg-secondary  text-white"}`}>
          {category.title}

        </button>
         ))
       }
        
      </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </div>
  );
};

export default MenuWrapper;

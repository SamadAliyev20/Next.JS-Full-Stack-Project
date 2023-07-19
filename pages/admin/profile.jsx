import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";
import Order from "@/components/admin/Order";
import Products from "@/components/admin/Products";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/admin.png"
            alt=""
            width={200}
            height={200}
            quality={100}
            className="rounded-3xl"
            objectFit="contain"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li onClick={() => setTabs(0)} className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}>
            <i className="fa fa-cutlery"></i>
            <button className="ml-1 ">Products</button>
          </li>
          <li onClick={() => setTabs(1)} className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}>
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li onClick={() => setTabs(2)} className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}>
            <i className="fa fa-ellipsis-h"></i>
            <button className="ml-1">Categories</button>
          </li>
          <li onClick={() => setTabs(3)} className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}>
            <i className="fa fa-window-maximize"></i>
            <button className="ml-1">Footer</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            }`}>
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products/> }
      {tabs === 1 && <Order/> }
      {tabs === 2 && <Category/> }
      {tabs === 3 && <Footer/> }
      
    </div>
  );
};

export default Profile;

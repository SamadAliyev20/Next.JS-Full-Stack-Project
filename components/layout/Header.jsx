import React, { useState } from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import {FaUserAlt,FaShoppingCart,FaSearch} from 'react-icons/fa'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container text-white mx-auto flex justify-between h-full items-center">
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="flex gap-x-2">
          <li>
            <Link className="px-[5px] py-[10px] hover:text-primary uppercase" href="/home">Home</Link>
          </li>
          <li>
            <Link className="px-[5px] py-[10px] hover:text-primary uppercase" href="/home">Menu</Link>
          </li>
          <li>
            <Link className="px-[5px] py-[10px] hover:text-primary uppercase" href="/home">About</Link>
          </li>
          <li>
            <Link className="px-[5px] py-[10px] hover:text-primary uppercase" href="/home">Book Table</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-4 items-center">
        <Link href={"#"}>
          <FaUserAlt className="hover:text-primary transition-all"/>
        </Link>
        <Link href={"#"}>
          <FaShoppingCart className="hover:text-primary transition-all"/>
        </Link>
        <Link onClick={() => setIsSearchModal(true)} href={"#"}>
          <FaSearch className="hover:text-primary transition-all"/>
        </Link>
        <Link href={"#"}>
          <button className="btn-primary">Order Online</button>
        </Link>
      </div>
      </div>
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
          <div className="">
            <Title addClass="text-red-500">Search</Title>
            </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;

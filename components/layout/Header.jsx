import React, { useState } from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import {FaUserAlt,FaShoppingCart,FaSearch} from 'react-icons/fa'
import Search from "../ui/Search";
import {GiHamburgerMenu,GiCancel} from 'react-icons/gi'
import { useRouter } from "next/router";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  const [isMenuModal, setIsMenuModal] = useState(false)
  const router = useRouter();
  return (
    <div className={`h-[5.5rem] z-50 relative ${
      router.asPath === "/" ? "bg-transparent" : "bg-secondary"
    }`}>
      <div className="container text-white mx-auto flex justify-between h-full items-center">
      <div>
        <Logo />
      </div>
      <nav className={`sm:static absolute top-0 left-0 z-50  h-screen w-full sm:text-white sm:w-auto sm:h-auto text-black sm:bg-transparent sm:flex hidden bg-white ${isMenuModal === true &&"!grid place-content-center"}`}>
        <ul className="flex gap-x-2 gap-y-4 sm:flex-row flex-col items-center ">
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
        {
          isMenuModal && (
            <button
              onClick={() => setIsMenuModal(false)}
              className="absolute top-4 right-4 z-50  sm:hidden"
            >
              <GiCancel
                size={30}
                className="hover:text-primary transition-all"
              />
            </button>
          )
        }
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
        <Link href={"#"} className="md:inline-block hidden">
          <button className="btn-primary">Order Online</button>
        </Link>
        <button onClick={() =>setIsMenuModal(true)} className="sm:hidden inline-block">
        <GiHamburgerMenu className="text-xl hover:text-primary transition-all"/>
        </button>
      </div>
      </div>
      {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
      )}
    </div>
  );
};

export default Header;

"use client";
import { useState } from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect } from "react";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme("light")}>
          <BiSun scale={50} />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <BiMoon scale={50} />
        </button>
      );
    }
  };
  return (
    <div
      className={`h-[5.5rem] prevent-select z-50 relative  ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      } `}
    >
      <div className="container text-white  mx-auto flex justify-between h-full items-center">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 z-50  h-screen w-full sm:text-white  sm:w-auto sm:h-auto text-black sm:bg-transparent sm:flex hidden bg-white  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 gap-y-4 sm:flex-row flex-col items-center">
            <li>
              <Link
                className={`px-[5px] py-[10px] hover:text-primary uppercase ${
                  router.asPath === "/" && "text-primary"
                }`}
                href="/"
                onClick={() => setIsMenuModal(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`px-[5px] py-[10px] hover:text-primary uppercase ${
                  router.asPath === "/menu" && "text-primary"
                }`}
                href="/menu"
                onClick={() => setIsMenuModal(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className={`px-[5px] py-[10px] hover:text-primary uppercase ${
                  router.asPath === "/about" && "text-primary"
                }`}
                href="/about"
                onClick={() => setIsMenuModal(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`px-[5px] py-[10px] hover:text-primary uppercase ${
                  router.asPath === "/reservation" && "text-primary"
                }`}
                href="/reservation"
                onClick={() => setIsMenuModal(false)}
              >
                Book Table
              </Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              onClick={() => setIsMenuModal(false)}
              className="absolute top-4 right-4 z-50  sm:hidden"
            >
              <GiCancel
                size={30}
                className="hover:text-primary transition-all"
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href={"/auth/login"}>
            <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href={"/cart"}>
            <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              <span className="absolute -top-2 -right-3 text-black font-semibold bg-primary w-4 h-4 text-xd grid place-content-center rounded-full ">
                0
              </span>
            </span>
          </Link>
          <Link onClick={() => setIsSearchModal(true)} href={"#"}>
            <FaSearch className="hover:text-primary transition-all" />
          </Link>
          <Link href={"/menu"} className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </Link>
          {renderThemeChanger()}
          <button
            onClick={() => setIsMenuModal(true)}
            className="sm:hidden inline-block"
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;

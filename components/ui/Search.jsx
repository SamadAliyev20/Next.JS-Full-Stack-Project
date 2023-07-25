import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className='fixed w-screen h-screen  z-50 top-0 left-0 after:content-[""] after:h-screen after:w-screen after:absolute after:top-0 after:left-0
    grid place-content-center after:opacity-70 after:bg-white'
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center ">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white dark:bg-secondary border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input placeholder="Search..." className="border w-full my-10" />

            <ul>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:cursor-pointer transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" width={48} height={48} alt="" />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:cursor-pointer transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" width={48} height={48} alt="" />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:cursor-pointer transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" width={48} height={48} alt="" />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <button
              onClick={() => setIsSearchModal(false)}
              className="absolute top-4 right-4"
            >
              <GiCancel
                size={30}
                className="hover:text-primary transition-all"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;

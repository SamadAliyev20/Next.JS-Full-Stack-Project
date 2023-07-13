import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";
const CampaignItem = () => {
  return (
    <div className="flex-1 bg-secondary py-5 px-[15px] rounded-md cursor-pointer flex items-center gap-x-4">
      <div className="relative  md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px] border-primary rounded-full overflow-hidden ">
        <Image
          className="hover:scale-105 transition-all"
          src="/images/o1.jpg"
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="font-dancing">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">OFF</span>
        </div>
        <button className="btn-primary flex items-center gap-2">
          Order Now
          <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className=" flex flex-wrap justify-between gap-5  container mx-auto py-20">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;

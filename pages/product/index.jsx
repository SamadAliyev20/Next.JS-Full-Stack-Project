import Title from "@/components/ui/Title";
import { addProduct } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";


const Index = () => {
  const dispatch = useDispatch();
  const extraItem = [
    {
      id:1,
      name:"Ketchup",
      price: 1
    },
    {
      id:2,
      name:"Hot Sauce",
      price: 2
    },
    {
      id:3,
      name:"Mayonnaise",
      price: 3
    },
  ]
  const [prices, setPrices] = useState([10,20,30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(extraItem)
  const [extras, setExtras] = useState([])
  const cart = useSelector((state) =>state.cart)
  console.log(cart);
  const handleSize = (sizeIndex) => {
  const difference = prices[sizeIndex] - prices[size]
  setSize(sizeIndex)
  changePrice(difference)
  }
 const changePrice = (number) => {
 setPrice(price + number)
 }
 const handleChange = (e,item) =>{
  const checked = e.target.checked;
  
  if(checked) {
    changePrice(item.price)
    setExtras([...extras,item])
    console.log(...extras,item);
  }
  else{
    changePrice(-item.price);
    setExtras(extras.filter((extra) => extra.id !== item.id))
   
  }
 }
  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap prevent-select">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-2 inline-block my-4">
          ${price}
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
          illo necessitatibus nostrum corrupti eligendi id nam dicta quisquam
          velit?
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose The Size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div onClick={() => handleSize(0) } className="relative w-8 h-8 cursor-pointer hover:animate-pulse">
              <Image src="/images/size.png" alt="" layout="fill" className="dark:bg-white dark:rounded-full" />
              <span className="absolute top-0 -right-6 text-xs bg-primary text-white rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div onClick={() => handleSize(1) } className="relative w-12 h-12 cursor-pointer hover:animate-pulse">
              <Image src="/images/size.png" alt="" layout="fill" className="dark:bg-white dark:rounded-full" />
              <span className="absolute top-0 -right-8 text-xs bg-primary text-white rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div onClick={() => handleSize(2) } className="relative w-16 h-16 cursor-pointer hover:animate-pulse">
              <Image src="/images/size.png" alt="" layout="fill" className="dark:bg-white dark:rounded-full" />
              <span className="absolute top-0 -right-4 text-xs bg-primary text-white rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
          <div className="flex gap-x-4 my-6 md:justify-start justify-center">
           {extraItems.map((item) => {
           return <label key={item.id} className="flex items-center gap-x-1">
             <input type="checkbox" className="w-5 h-5 accent-primary" onChange={(e) => handleChange(e,item)} />
             <span className="text-sm font-semibold">{item.name}</span>
         </label>
           })}
          </div>
          <button className="btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

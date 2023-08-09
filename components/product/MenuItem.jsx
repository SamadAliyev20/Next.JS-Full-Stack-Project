import { addProduct } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const MenuItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const findCart = cart.products.find((item) => item._id === product._id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        extras: [{ text: "empty" }],
        price: product.prices[0],
        quantity: 1,
      })
    );
    toast.success("Added to cart");
  };
  return (
    <div className="bg-secondary cursor-pointer rounded-3xl">
      <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <Link href={`/productDetail/${product._id}`}>
          <div className="relative w-36 h-36 hover:scale-105 transition-all ">
            <Image src={product?.img} alt="" layout="fill" priority />
          </div>
        </Link>
      </div>
      <div className="text-white p-[25px]">
        <h4 className="text-xl font-semibold">{product?.title}</h4>
        <p className="text-[15px]">{product?.desc}</p>
        <div className="flex justify-between items-center mt-4">
          <span>${product?.prices[0]}</span>
          <button
            disabled={findCart ? true : false}
            onClick={handleClick}
            className="btn-primary !w-10 !h-10 rounded-full !p-0 grid place-content-center"
          >
            <MdShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

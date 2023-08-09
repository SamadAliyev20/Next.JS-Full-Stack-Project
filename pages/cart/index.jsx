import Title from "@/components/ui/Title";
import { getCartTotal, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal(cart));
  }, [dispatch, cart]);
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <div className="max-h-52 overflow-auto w-full">
            {cart?.products?.length > 0 ? (
              <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      THUMBNAIL
                    </th>
                    <th scope="col" className="py-3 px-6">
                      NAME
                    </th>
                    <th scope="col" className="py-3 px-6">
                      EXTRAS
                    </th>
                    <th scope="col" className="py-3 px-6">
                      PRICE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      QUANTITY
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DELETE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product, index) => (
                    <tr
                      className="transition-all  bg-secondary border-gray-700 hover:bg-primary "
                      key={index}
                    >
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                        <Image
                          src={product?.img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.title}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.extras?.length > 0
                          ? product.extras.map((item) => (
                              <span key={item._id}>{item.text}, </span>
                            ))
                          : "empty"}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        ${product.price}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.quantity}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <button
                          onClick={() => dispatch(removeFromCart(product?._id))}
                          className="btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center font-semibold">No Products...</p>
            )}
          </div>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full   md:text-start !text-center">
          <Title addClass="text-[40px]">CART TOTAL</Title>
          <div className="mt-6">
            <b>Subtotal: </b>${cart.totalAmount} <br />
            <b>Total: </b>${cart.totalAmount}
          </div>
          <div>
            <button className="btn-primary mt-4 md:w-auto w-52">
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import Swal from "sweetalert2";
import EditProduct from "./EditProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState([]);
  const [productEditModal, setProductEditModal] = useState(false);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
      };
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleDelete = async (id) => {
    if (handleDelete) {
      Swal.fire({
        title: "Are you sure delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "You deleted product!", "success");
          axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
          setProducts(products.filter((product) => product._id !== id));
        }
      });
    }
  };
  const handleModal = async (id) => {
    const product = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );
    setIdProduct(product.data);
    setProductEditModal(true);
  };
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Products</Title>
      <div className="overflow-x-auto !h-[500px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="transition-all bg-secondary border-gray-700 hover:bg-primary "
                key={product._id}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <Image src={product?.img} alt="" width={50} height={50} />
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product?._id.length > 10
                    ? product._id.substring(0, 10)
                    : product._id}
                  ...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product?.title}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  ${product?.prices[0]}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <button
                    className="btn-primary !bg-danger mx-2"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                  {productEditModal && (
                    <EditProduct
                      setProductEditModal={setProductEditModal}
                      product={idProduct}
                    />
                  )}
                  <button
                    className="btn-primary !bg-yellow-500"
                    onClick={() => handleModal(product._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;

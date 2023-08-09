import { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categories, products }) => {
  const [active, setActive] = useState(0);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    setFilteredProduct(
      products.filter(
        (product) => product.category === categories[active].title.toLowerCase()
      )
    );
    console.log(
      products.filter(
        (product) => product.category === categories[active].title.toLowerCase()
      )
    );
  }, [categories, active, products]);

  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center  w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          {categories.map((category, index) => (
            <button
              onClick={() => setActive(index)}
              key={category._id}
              className={`px-6 py-2 rounded-3xl ${
                index === active && "bg-secondary  text-white"
              }`}
            >
              {category?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[400px]">
        {filteredProduct.length <= 0 ? (
          <div className="flex justify-center">
            <Title addClass={"text-[40px]"}>No Products</Title>
          </div>
        ) : (
          filteredProduct.length > 0 &&
          filteredProduct.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MenuWrapper;

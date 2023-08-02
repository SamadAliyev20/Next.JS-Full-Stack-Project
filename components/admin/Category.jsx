import { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../loading/loading";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
        setTimeout(() => {
          setIsLoading(false);
        },2000);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      setCategories([...categories, res?.data]);
      setInputText("");
      if (res.status === 200) {
        toast.success("Category created successfully");
      }
      if (res.status === 400) {
        toast.error("Category already exists!");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
          Swal.fire("Deleted!", "You deleted category!", "success");
        }
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
        setCategories(categories.filter((category) => category._id !== id));
      });
    }
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Category</Title>
      <div className="mt-5 ">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button className="btn-primary" onClick={handleCreate}>
            Add
          </button>
        </div>
        {isLoading ? (
        <Loading />) : (
        <div className="mt-10 max-h-[250px] overflow-auto px-5 ">
          {categories?.map((category, index) => (
            <div className="flex justify-between mt-4" key={index}>
              <b className="text-xl">{category.title}</b>
              <button
                className="btn-primary !bg-danger mb-2"
                onClick={() => handleDelete(category._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        )
          }
      </div>
    </div>
  );
};
export default Category;

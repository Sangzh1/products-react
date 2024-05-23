import { useEffect, useRef, useState } from "react";
import { useAddNewDoc } from "../hooks/useAddNewDoc";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";

function Dashboard() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const { addNewDoc, isPending, newTodo } = useAddNewDoc(null);
  const name = useRef();
  const description = useRef();
  const category = useRef();
  const price = useRef();
  const images = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewDoc("products", {
      name: name.current.value,
      description: description.current.value,
      category: category.current.value,
      price: price.current.value + '$',
      images: images.current.value,
      uid: user.uid,
    });
  };


  useEffect(() => {
    if (!isPending && newTodo) {
      navigate("/");
    }
  }, [isPending, newTodo]);


  return (
    <div className="max-container pt-[34px] pb-[169px]">
      <div className="flex items-center">
        <h3 className="text-white opacity-50 mr-2">Pages</h3>
        <p className="text-white">/ Dashboard</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-medium mb-14">
          Create Products
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="py-[27px] px-[48px] bg-slate-600">
            <div className="flex flex-col mb-6">
              <label className="text-white text-sm mb-1">Name:</label>
              <input
                type="text"
                ref={name}
                name="name"
                id="name"
                className="text-white py-[15px] px-[20px] w-[350px] rounded-2xl bg-transparent border"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-white text-sm mb-1">Category:</label>
              <input
                type="text"
                ref={category}
                name="category"
                id="category"
                className="text-white py-[15px] px-[20px] w-[350px] rounded-2xl bg-transparent border"
                placeholder="Product category select"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-white text-sm mb-1">Price:</label>
              <input
                type="text"
                ref={price}
                name="price"
                id="price"
                className="text-white py-[15px] px-[20px] w-[350px] rounded-2xl bg-transparent border"
                placeholder="Product price"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-white text-sm mb-1">Image link:</label>
              <input
                type="url"
                ref={images}
                name="photoURL"
                id="photoURL"
                className="text-white py-[15px] px-[20px] w-[350px] rounded-2xl bg-transparent border"
                placeholder="Product image link"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-white text-sm mb-1">Description:</label>
              <textarea
                name="description"
                ref={description}
                id="description"
                placeholder="Product Description"
                className="text-white py-[44px] px-5 rounded-xl bg-transparent border"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[350px] bg-sky-500 py-3 rounded-xl uppercase text-white text-xs"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;

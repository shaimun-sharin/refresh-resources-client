import React from "react";
import { useForm } from "react-hook-form";

const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/food";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-warning text-center">
        Please fill up the form to add food
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-4"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-4"
          placeholder="supplier name"
          {...register("supplierName")}
        />
        <input
          className="mb-4"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="mb-4"
          placeholder="Price"
          type="text"
          {...register("price")}
        />
        <input
          className="mb-4"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-4"
          placeholder="Photo URL"
          type="text"
          {...register("picture")}
        />
        <input
          className="bg-success text-white"
          type="submit"
          value="Add Food"
        />
      </form>
    </div>
  );
};

export default AddFood;

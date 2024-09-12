import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    age: ""
  });
  //useNavigate
  const naviGate = useNavigate();
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/create", values)
      .then((res) => {
        alert('Successfully Created')
        naviGate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="flex w-full h-lvh justify-center items-center bg-light ">
      <div className="w-2/4  bg-white border shadow px-5 pt-2 pb-5 rounded ">
        <h1 className="font-bold text-4xl text-center mb-5">Add a User</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter name"
              onChange={(e) => setValues({  ...values,username: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-grey-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter email"
              onChange={(e) => setValues({...values,email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-grey-700 font-bold mb-2"
            >
              Age:
            </label>
            <input
              type="text"
              name="phone"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter age"
              onChange={(e) => setValues({...values,age: e.target.value })}
            />
          </div>
          <div className="flex gap-x-3">
            <button
              type="submit"
              className="rounded bg-green-500 px-5 py-2 text-white font-bold"
            >
              Submit
            </button>
            <Link
              to="/"
              className="rounded px-5 py-2 bg-blue-500 text-white font-bold"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    rollnumber: "",
    name: "",
    dob: "",
    file:""
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
        <h1 className="font-bold text-4xl text-center mb-5">Add Data</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              rollnumber:
            </label>
            <input
              type="text"
              name="rollnumber"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter rollnumber"
              onChange={(e) => setValues({  ...values,rollnumber: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-grey-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Name"
              onChange={(e) => setValues({...values,name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-grey-700 font-bold mb-2"
            >
              DOb:
            </label>
            <input
              type="text"
              name="phone"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter dob"
              onChange={(e) => setValues({...values,dob: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-grey-700 font-bold mb-2"
            >
              File:
            </label>
            <input
              type="file"
              name="file"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter DOB"
              onChange={(e) => setValues({...values,file: e.target.value })}
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

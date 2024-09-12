import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

//update function
const Update = () => {
  //values state
  const [values, setValues] = useState({
    username: "",
    email: "",
    age: "",
  });

  //id
  const { id } = useParams();

  //get the data
  useEffect(() => {
    axios
      .get("http://localhost:4000/updateget/" + id)
      .then((res) => {
        setValues(res.data.findData)
        
        
      })
      .catch((e) => console.log(e));
  }, [id]);

  //getting input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //navigate
  const naviGate = useNavigate();
  //handleUpdate
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id,values)
      .then((res) => {
        console.log('Successfully Updated');
        naviGate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex w-full h-lvh justify-center items-center bg-light ">
      <div className="w-2/4  bg-white border shadow px-5 pt-2 pb-5 rounded ">
        <h1 className="font-bold text-4xl mb-5">Update a User</h1>
        <form action="" onSubmit={handleUpdate}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="username"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter name"
              value={values.username}
              onChange={handleChange}
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
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="block text-grey-700 font-bold mb-2">
              Age:
            </label>
            <input
              type="text"
              name="age"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter age"
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-x-3">
            <button
              type="submit"
              className="rounded bg-green-500 px-5 py-2 text-white font-bold"
            >
              Update
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

export default Update;

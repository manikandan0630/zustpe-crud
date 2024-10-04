import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Update function
const Update = () => {
  // Values state
  const [values, setValues] = useState({
    rollnumber: "",
    name: "",
    dob: "",
    file: ""
  });

  // ID
  const { id } = useParams();

  // Get the data
  useEffect(() => {
    axios
      .get("http://localhost:4000/updateget/" + id)
      .then((res) => {
        const data = res.data.findData || {}; // Default to an empty object if undefined
        setValues({
          rollnumber: data.rollnumber || "", // Provide a default if undefined
          name: data.name || "",
          dob: data.dob || "",
          file: data.file || "" // Add if file is part of the response
        });
      })
      .catch((e) => console.log(e));
  }, [id]);

  // Getting input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Navigate
  const navigate = useNavigate();
  // Handle Update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id, values)
      .then((res) => {
        console.log('Successfully Updated');
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex w-full h-lvh justify-center items-center bg-light">
      <div className="w-2/4 bg-white border shadow px-5 pt-2 pb-5 rounded">
        <h1 className="font-bold text-4xl mb-5">Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label
              htmlFor="rollnumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Roll Number:
            </label>
            <input
              type="text"
              name="rollnumber"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Roll Number"
              value={values.rollnumber}
              onChange={handleChange}
            />
          </div>
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
              placeholder="Enter Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              Date of Birth:
            </label>
            <input
              type="text"
              name="dob"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={values.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              File:
            </label>
            <input
              type="file"
              name="file"
              className="appearance-none border rounded w-2/4 py-2 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={values.file}
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

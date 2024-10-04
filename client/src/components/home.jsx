import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
const Home = () => {
  let [data, setData] = useState([]);

  //fetch the resources
  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  //handle delete
  const handleDelete = (id) => {
    // console.log("test")
    const confirm = window.confirm("If you want delete the data?");
    if (confirm) {
      axios
        .delete("http://localhost:4000/delete/" + id)
        .then((res) => {
          console.log("Deleted Successfully");
          window.location.reload();
        })
        .catch((e) => console.log(e));
    } else {
      alert("You canceling the deleting process");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-light  h-svh">
        <h1 className="font-bold text-lg">List of users</h1>
        <div className="w-9/12 rounded border shadow-lg  bg-white p-4 ">
          <div className="flex justify-end">
            <Link
              to="/create"
              className="rounded px-5 py-2 bg-green-500 text-white font-bold"
            >
              Add <span className="text-lg text-white-700">+</span>
            </Link>
          </div>
          <table className="  ">
            <thead>
              <tr className="px-0">
                <th className="px-1 ">Rollnumber</th>
                <th className="px-1">Name</th>
                <th className="px-1">DOB</th>
                <th className="px-1">File</th>
                <th className="px-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, ind) => (
                <tr key={ind} className="mt-5">
               
                  <td className="px-5 py-2 mt-3">{ele.rollnumber}</td>
                  <td className="px-5 py-2 mt-3">{ele.name}</td>
                  <td className="px-5 py-2 mt-3">{ele.dob}</td>
                  <td className="px-5 py-5 mt-3">{ele.file}</td>
                  <td className=" flex gap-x-2 mt-3 ms-9 text-white font-bold ">
                  
                    {/* <button className="rounded py-1 px-5 bg-orange-500" >Read</button> */}
                    <Link
                      to={`/update/${ele._id}`}
                      className="rounded py-3 px-3 bg-blue-700  "
                    >
                      <LuPencil />
                    </Link>
                    <button
                      onClick={() => handleDelete(ele._id)}
                      className="rounded py-3 px-3 bg-red-700 ]"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

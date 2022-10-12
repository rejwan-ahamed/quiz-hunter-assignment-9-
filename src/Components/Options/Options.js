import React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Options = ({ ops, ID, correct }) => {
  const handler = (event) => {
    console.log(correct);

    if (event.target.value === correct) {
      toast.success("Your ans is correct", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Your ans is wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>

      <li >
        <input
          type="radio"
          id={ops}
          name={ID}
          value={ops}
          key={ID}
          class="hidden peer"
          required=""
          onClick={(event) => handler(event)}
        />
        <label
          for={ops}
          class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
        >
          <div class="block">
            <div class="w-full">{ops}</div>
          </div>
        </label>
      </li>
    </div>
  );
};

export default Options;

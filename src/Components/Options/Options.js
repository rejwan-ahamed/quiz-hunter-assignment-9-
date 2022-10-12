import React from "react";

const Options = ({ops,ID,handler}) => {
  return (
    <div>
      <li onClick={()=>handler(ops)}>
        <input
          type="radio"
          id={ops}
          name={ID}
          value={ops}
          class="hidden peer"
          required=""
        />
        <label
          for={ops}
          class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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

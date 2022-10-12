import React, { useState } from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const Question = ({ ques }) => {

  // 

  const clickHandeler = (event)=>{
    console.log(event)
  }

  const { question, options, id, correctAnswer } = ques;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="eye-icon flex justify-end pr-12"  onClick={() => setShow(!show)}>
      {show ? (
            <EyeSlashIcon
            className="h-6 w-6 text-black mt-12 cursor-pointer hover:text-blue-700"
          />
        ) :<EyeIcon
        className="h-6 w-6 text-black mt-12 cursor-pointer hover:text-blue-700"
      />}
        
      </div>

      <div className="show-ans flex justify-center text-green-500">
        {show ? (
            <p className="text-center font-mono font-bold text-xl">
              {correctAnswer}
            </p>
        ) : undefined}
      </div>
      <h3 class="mb-5 text-lg font-bold font-mono text-gray-900 dark:text-white mt-12">
        {question}
      </h3>
      <ul class="grid gap-6 w-full md:grid-cols-2 lg:px-10 font-mono mt-12">
        {options.map((option) => (
          <Options ops={option} key={id} ID={id} handler={clickHandeler}></Options>
        ))}
      </ul>
    </div>
  );
};

export default Question;

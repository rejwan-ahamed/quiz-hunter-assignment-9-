import React from "react";
import Options from "../Options/Options";

const Question = ({ ques }) => {
  const {question,options,id} = ques;
  return (
    <div>
      <h3 class="mb-5 text-lg font-bold font-mono text-gray-900 dark:text-white mt-12">
        {question}
      </h3>
      <ul class="grid gap-6 w-full md:grid-cols-2 lg:px-10 font-mono mt-12">
        {
            options.map(option=><Options ops={option} key={id} ID={id}></Options>)
        }
      </ul>
    </div>
  );
};

export default Question;

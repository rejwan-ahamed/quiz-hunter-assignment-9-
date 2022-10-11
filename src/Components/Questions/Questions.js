import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const data = useLoaderData();
  
  const question = data.data.questions

  return (
    <div>
      <h1 className="mb-20 font-mono font-bold text-2xl text-blue-600">
        {data.data.name}
      </h1>

      {
        question.map(qus => <Question ques = {qus}></Question>)
      }
    </div>
  );
};

export default Questions;

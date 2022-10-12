import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const data = useLoaderData();

  const question = data.data.questions;

  return (
    <div>
      <h1 className="mt-20 font-mono font-bold text-2xl text-blue-600">
        {data.data.name}
      </h1>
      <h1 className="mb-20 font-mono font-bold text-2xl text-blue-600">
       Total quizzes: {data.data.total}
      </h1>
      <div className="questions-main px-72 pb-12 mb-12 md:px-20 lg:px-40 xl:px-72 2xl:px-72">
        {question.map((qus) => (
          <Question key={qus.id} ques={qus}></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;

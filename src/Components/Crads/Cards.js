import React from "react";
import { Link } from "react-router-dom";

const Cards = ({quiz}) => {
  console.log(quiz)
  const {id,name,logo,total} = quiz
  return (
    <div className=" flex gap-4 p-8">
      <div className="max-w-sm bg-blue-200 rounded-lg border-2 border-blue-900 shadow-md">
        <div>
          <img
            className="rounded-t-lg border-b-2 border-blue-900"
            src={logo}
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </div>
          <h2 className="mb-3 font-bold text-xl text-gray-700 ">
            Total quiz: {total}
          </h2>
          <Link to={`questions/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Start Quiz
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

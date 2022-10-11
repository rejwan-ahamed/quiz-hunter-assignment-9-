import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Crads/Cards";
import "./Main.css";

const Main = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <div className="hero-main block items-center justify-between md:flex">
        <div className="hero-left">
          <img src="/images/1.png" className=" hero-image" alt="" srcset="" />
        </div>
        <div className="hero-right">
          <h1 className="font-mono font-bold text-left">
            Hello We are Jonkar Mavabub quiz team. Every day we lunch lots of
            quizes on different topics to make easy and interactive interview
            preparation for our students and our members. Every day solving
            interview question will help you to gain new knowledge and answer
            question wisely in interview.{" "}
          </h1>
        </div>
      </div>
      <div className="card-main grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 md:mt-10 md:mb-10 lg:grid-col-4">
        {data.data.map((quizes) => (
          <Cards quiz={quizes} key={data.id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Main;

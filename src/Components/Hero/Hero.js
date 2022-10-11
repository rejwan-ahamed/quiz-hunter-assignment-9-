import React from "react";
import Cards from "../Crads/Cards";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero-main flex items-center justify-between">
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

      <Cards></Cards>
    </div>
  );
};

export default Hero;

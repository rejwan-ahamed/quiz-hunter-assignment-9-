import React from "react";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="logo.svg"
            className="mr-3 h-10 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-mono font-bold">
            Quiz Hunter
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink to={"/home"} className={({isActive})=> isActive? 'active': undefined}>Home</NavLink>
          <NavLink to={"/blogs"} className={({isActive})=> isActive? 'active': undefined}>Blogs</NavLink>
          <NavLink to={"/statics"} className={({isActive})=> isActive? 'active': undefined}>Statics</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

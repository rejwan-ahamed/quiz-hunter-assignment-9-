import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

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
          <Link to={'/'}>Home</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/statics'}>Statics</Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

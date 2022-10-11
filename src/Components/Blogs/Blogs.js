import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <h1 className="text-blue-600 font-mono font-bold text-2xl mt-16">
        Question Answers.
      </h1>
      <div className="questions-main mt-10 text-left md:px-20 lg:px-40 xl:px-60">
        <h1 className="font-mono text-black font-bold text-xl">
          1. What is the purpose of react router
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold">
          Routing is a process in which a user is directed to different pages
          based on their action or request. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route.
        </p>
        <h1 className="font-mono text-black font-bold text-xl mt-16">
          2. How does context api work
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.In a typical React
          application, data is passed top-down (parent to child) via props, but
          such usage can be cumbersome for certain types of props (e.g. locale
          preference, UI theme) that are required by many components within an
          application.
        </p>
        <h1 className="font-mono text-black font-bold text-xl mt-16">
          3. What is useref() hook in react
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold mb-12">
          A hook is a special function which enables one use state and other
          React features without writing ES6 class components which are
          generally considered difficult to understand, use and master. useRef
          hook is part of the React Hooks API. It is a function which takes a
          maximum of one argument and returns an Object. The returned object has
          a property called current whose value is the argument passed to
          useRef. If you invoke it without an argument, the returned object's
          current property is set to undefined. The code below illustrates how
          to invoke the useRef hook in functional components.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

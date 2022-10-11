import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-blue-600 font-mono font-bold text-2xl">
        Question Answers.
      </h1>
      <div className="questions-main mt-10 text-left px-60">
        <h1 className="font-mono text-black font-bold text-xl">
          1. What is the purpose of react router
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
        <h1 className="font-mono text-black font-bold text-xl mt-16">
          2. How does context api work
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
        <h1 className="font-mono text-black font-bold text-xl mt-16">
          3. What is useref() hook in react
        </h1>
        <p className="mt-4 text-blue-600 font-mono font-bold">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

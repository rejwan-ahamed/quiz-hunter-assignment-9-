import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Mian/Main";
import Layout from "./Layout/Layout";
import Blogs from "./Components/Blogs/Blogs";
import Statics from "./Components/Statics/Statics";
import Questions from "./Components/Questions/Questions";
import NotFound from "./Components/NotFound/NotFound";

import { ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Main></Main>,
          loader: async () => {
            return await fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/home",
          element: <Main></Main>,
          loader: async () => {
            return await fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        { path: "/blogs", element: <Blogs></Blogs> },
        { path: "/statics", element: <Statics></Statics>, loader: async () => {
          return await fetch("https://openapi.programming-hero.com/api/quiz");
        }, },
        {
          path: "/questions/:id",
          loader: async ({ params }) => {
            return await fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Questions></Questions>,
        },
      ],
    },
    {path:"*", element:<NotFound></NotFound>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

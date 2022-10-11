import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Mian/Main";
import Layout from "./Layout/Layout";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [{ path: "/", element: <Main></Main> }],
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;

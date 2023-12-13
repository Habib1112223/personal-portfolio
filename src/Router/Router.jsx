import {
      createBrowserRouter,
    } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Navbar/Navbar";
import Error from "../component/Error/Error";
import About from "../Pages/About/About";
import Skills from "../Pages/Slills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

    const router = createBrowserRouter([
      {
        path: "/",
        errorElement:<Error></Error>,
        element: <LayOut></LayOut>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/skills',
            element:<Skills></Skills>
          },
          {
            path:'/projects',
            element:<Projects></Projects>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
        ]
      },
    ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Page/Home/Home";
import Main from "../Component/MainPage/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         }
      ]
    },
]);

export default router;
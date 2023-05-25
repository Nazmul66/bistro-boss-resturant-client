import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Page/Home/Home";
import Main from "../Component/MainPage/Main";
import Our_menu from "../Component/Page/Our_menu/Our_menu";
import Our_shop from "../Component/Page/Our_shop/Our_shop";
import LoginPage from "../Component/Section/LoginPage/LoginPage";
import RegisterPage from "../Component/Section/RegisterPage/RegisterPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/menu",
            element: <Our_menu></Our_menu>
         },
         {
            path: "/shop/:category",
            element: <Our_shop></Our_shop>
         },
         {
            path: "/login",
            element: <LoginPage></LoginPage>
         },
         {
            path: "/register",
            element: <RegisterPage></RegisterPage>
         }
      ]
    },
]);

export default router;
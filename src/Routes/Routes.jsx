import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Page/Home/Home";
import Main from "../Component/MainPage/Main";
import Our_menu from "../Component/Page/Our_menu/Our_menu";
import Our_shop from "../Component/Page/Our_shop/Our_shop";
import LoginPage from "../Component/Section/LoginPage/LoginPage";
import RegisterPage from "../Component/Section/RegisterPage/RegisterPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact_Us from "../Component/Section/Contact_Us/Contact_Us";
import Dashboard from "../Component/MainPage/Dashboard/Dashboard";
import MyCart from "../Dashboard_Component/MyCart/MyCart";
import MyBooking from "../Dashboard_Component/MyBooking/MyBooking";
import Payment_history from "../Dashboard_Component/Payment_history/Payment_history";
import AddReview from "../Dashboard_Component/AddReview/AddReview";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/contact",
            element: <Contact_Us></Contact_Us>
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
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
         {
            path: "/dashboard/myCart",
            element: <MyCart></MyCart>
         },
         {
            path: "/dashboard/myBooking",
            element: <MyBooking></MyBooking>
         },
         {
            path: "/dashboard/payment",
            element: <Payment_history></Payment_history>
         },
         {
            path: "/dashboard/addReview",
            element: <AddReview></AddReview>
         }
      ]
    }
]);

export default router;
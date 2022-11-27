import { createBrowserRouter } from "react-router-dom";
import Products from "../Components/Pages/Category/Products/Products";
import AddProduct from "../Components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Components/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/AllSellers/AllSellers";
import Alluser from "../Components/Pages/Dashboard/AllUsers/Alluser";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import CheckOut from "../Components/Pages/Dashboard/CheckOut/CheckOut";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import MyOrders from "../Components/Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Components/Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Components/Pages/Homes/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/Login/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/category/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
        element: <Products></Products>
      },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
        ,
        element: <CheckOut></CheckOut>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
      ,
      {
        path: '/dashboard/myorders',
        element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/myproducts',
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      },

      {
        path: '/dashboard/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/allsellers',
        element: <AllSellers></AllSellers>
      },
      {
        path: '/dashboard/allbuyers',
        element: <AllBuyers></AllBuyers>
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/checkout/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/dashboard/checkout/${params.id}`)
        ,
        element: <CheckOut></CheckOut>
      },
    ]
  }
])

export default router;
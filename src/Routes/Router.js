import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Pages/Blogs/Blogs";
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
import Wishlist from "../Components/Pages/Dashboard/Wishlist/Wishlist";
import Home from "../Components/Pages/Homes/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/Login/SignUp";
import ErrorPage from "../Components/Shared/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/category/:id',
        loader: ({ params }) => fetch(`https://pirates-hut-server.vercel.app/category/${params.id}`),
        element: <PrivateRoute><Products></Products></PrivateRoute>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
      ,
      {
        path: '/dashboard/myorders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: '/dashboard/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: '/dashboard/myproducts',
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      },

      {
        path: '/dashboard/addProduct',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/allsellers',
        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
      },
      {
        path: '/dashboard/allbuyers',
        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
      },
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/checkout/:id',
        loader: ({ params }) => fetch(`https://pirates-hut-server.vercel.app/dashboard/checkout/${params.id}`)
        ,
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
    ]
  }
])

export default router;
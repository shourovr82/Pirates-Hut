import { createBrowserRouter } from "react-router-dom";
import CategoryItem from "../Components/Pages/Category/CategoryItems/CategoryItem";
import Home from "../Components/Pages/Homes/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/Login/SignUp";
import Main from "../Layouts/Main";

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
        element: <CategoryItem></CategoryItem>
      }
    ]
  }
])

export default router;
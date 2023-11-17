import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import MenuPage from "../pages/menu/MenuPage";
import ShopPage from "../pages/shop/ShopPage";
import LoginPage from "../pages/login/LoginPage";
import ContactPage from "../pages/contact/ContactPage";
import RegisterPage from "../pages/register/RegisterPage";
import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoutes } from "../components/PublicRoutes";
import { DashboardLayout } from "../pages/dashboard/DashboardLayout";
import MyCartPage from "../pages/dashboard/cart/MyCartPage";
import UsersPage from "../pages/dashboard/user/UsersPage";
import { AdminRoute } from "../components/AdminRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: '/menu', element: <MenuPage/>},
      { path: '/shop', element: <ShopPage/>},
      {path: '/contact', element: <ContactPage/>},
      
      ],
  },
  {
    path: '/login',
    element: <PublicRoutes><LoginPage/></PublicRoutes>
  },
  { path: '/signup', 
    element: <PublicRoutes><RegisterPage/></PublicRoutes>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>,
    children: [
      {path: '/dashboard/cart', element: <MyCartPage/>},
      {path: '/dashboard/users', element: <AdminRoute><UsersPage/></AdminRoute>}
    ]
  }
]);

export default router;

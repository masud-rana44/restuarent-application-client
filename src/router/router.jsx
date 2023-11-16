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
import DashboardPage from "../pages/dashboard/DashboardPage";
import { PublicRoutes } from "../components/PublicRoutes";

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
      <DashboardPage/>
    </PrivateRoute>
  }
]);

export default router;

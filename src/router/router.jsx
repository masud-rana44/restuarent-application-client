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
import { PublicRoute } from "../components/PublicRoute";
import { DashboardLayout } from "../pages/dashboard/DashboardLayout";
import MyCartPage from "../pages/dashboard/cart/MyCartPage";
import UsersPage from "../pages/dashboard/user/UsersPage";
import { AdminRoute } from "../components/AdminRoute";
import ItemsPage from "../pages/dashboard/items/ItemsPage";
import AddItemPage from "../pages/dashboard/add-items/AddItemPage";
import UpdateItemsPage from "../pages/dashboard/update-items/UpdateItemsPage";
import PaymentPage from "../pages/dashboard/payment/PaymentPage";
import AdminHome from "../pages/dashboard/admin-home/AdminHome";
import UserHome from "../pages/dashboard/user-home/UserHome";
import PaymentHistoryPage from "../pages/dashboard/payment-history/PaymentHistory";

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
    element: <PublicRoute><LoginPage/></PublicRoute>
  },
  { path: '/signup', 
    element: <PublicRoute><RegisterPage/></PublicRoute>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>,
    children: [
      {path: '/dashboard/user-home', element: <UserHome/>},
      {path: '/dashboard/cart', element: <MyCartPage/>},
      {path: '/dashboard/payment', element: <PaymentPage/>},
      {path: '/dashboard/payment-history', element: <PaymentHistoryPage/>},

      // admin routes
      {path: '/dashboard/admin-home', element: <AdminRoute><AdminHome/></AdminRoute>},
      {path: '/dashboard/users', element: <AdminRoute><UsersPage/></AdminRoute>},
      {path: '/dashboard/items', element: <AdminRoute><ItemsPage/></AdminRoute>},
      {path: '/dashboard/items/new', element: <AdminRoute><AddItemPage/></AdminRoute>},
      {path: '/dashboard/items/update/:id', element: <AdminRoute><UpdateItemsPage/></AdminRoute>}
    ]
  }
]);

export default router;

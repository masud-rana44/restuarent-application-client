import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import MenuPage from "../pages/menu/MenuPage";
import ShopPage from "../pages/shop/ShopPage";
import ContactPage from "../pages/contact/ContactPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: '/menu', element: <MenuPage/>},
      { path: '/shop', element: <ShopPage/>},
      {path: '/contact', element: <ContactPage/>}
      ],
  },
]);

export default router;

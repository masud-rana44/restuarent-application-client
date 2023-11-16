import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router";
import { AuthProvider } from "./contexts/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
);

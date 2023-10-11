import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MainRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);

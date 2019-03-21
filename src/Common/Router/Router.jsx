// Modify this file when you want to change between class and Hooks
// You should thus change the Import
import React from "react";
import { ProtectedRoute, PublicRoute } from "./RouteConfig";
import { Router } from "@reach/router";
import IndexPages from "../../Pages/Index/IndexContainerClass";
import DashBoardPages from "../../Pages/Dashboard/DashboardContainerClass";
import { AuthProvider } from "../Context/Auth/AuthContextClass";

const router = () => (
  <AuthProvider>
    <Router>
      <PublicRoute component={IndexPages} path="/" />
      <ProtectedRoute component={DashBoardPages} path="dashboard" />
    </Router>
  </AuthProvider>
);
export default router;

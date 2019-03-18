// Modify this file when you want to change between class and Hooks
import React from "react";
import { ProtectedRoute, PublicRoute } from "./RouteConfigHooks";
import { Router } from "@reach/router";
import IndexPages from "../../Pages/Index/IndexContainerHooks";
import DashBoardPages from "../../Pages/Dashboard/DashboardContainerHooks";
import { AuthProvider } from "../Context/Auth/AuthContextHooks";

const router = () => (
  <AuthProvider>
    <Router>
      <PublicRoute component={IndexPages} path="/" />
      <ProtectedRoute component={DashBoardPages} path="dashboard" />
    </Router>
  </AuthProvider>
);
export default router;

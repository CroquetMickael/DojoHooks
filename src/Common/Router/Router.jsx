// Do not touch this file
import React from "react";
import { ProtectedRoute, PublicRoute } from "./RouteConfig";
import { Router } from "@reach/router";
import IndexPage from "../../Pages/Index/IndexComponent";
import DashboardPage from "../../Pages/Dashboard/DashboardComponent";
import { AuthProvider } from "../Context/Auth/AuthContextClass";
const router = () => (
  <AuthProvider>
    <Router>
      <PublicRoute component={IndexPage} path="/" />
      <ProtectedRoute component={DashboardPage} path="dashboard" />
    </Router>
  </AuthProvider>
);
export default router;

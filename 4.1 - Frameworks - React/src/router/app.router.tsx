import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { MemberPage } from "@/memberPage";
import { Detail } from "@/detail";

export const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path={switchRoutes.root} element={<MemberPage />} />
      <Route path={switchRoutes.memberPage} element={<MemberPage />} />
      <Route path={switchRoutes.detail} element={<Detail />} />
      <Route path="*" element={<Navigate to={switchRoutes.root} />} />
    </Routes>
  </Router>
); //min18

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register.jsx";
import { AllMedications } from "../views/AllMedications.jsx";

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/medications">
            <Route index element={<AllMedications />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

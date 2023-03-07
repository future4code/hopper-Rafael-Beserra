import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

function Router() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<HomePage />} />
                    <Route path="/login"  element={<LoginPage />} />
                    <Route path="/entrar"  element={<SignupPage />} />
                    <Route path="/carrinho"  element={<CartPage />} />
                    <Route path="/administrador"  element={<AdminPage /> }/>
                    <Route path="/acdicionar-receita"  element={<AddRecipePage />} />
                    <Route path="*"  element={<ErrorPage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default Router;
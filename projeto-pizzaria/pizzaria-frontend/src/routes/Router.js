import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterAddress from "../pages/RegisterAddress";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import ApproveOrderPage from "../pages/ApproveOrderPage";
import ItemOrderPage from "../pages/ItemOrderPage";

function Router() {
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path="/"  element={<HomePage />} />
                        <Route path="/login"  element={<LoginPage />} />
                        <Route path="/cadastre-se"  element={<SignupPage />} />
                        <Route path="/cadastre-se/registrar-endereco" element={ <RegisterAddress />} />
                        <Route path="/user/perfil/historico-de-pedidos" element={ <OrderHistoryPage /> } />
                        <Route path="/user/perfil/itens-da-compra/:orderid" element={ <ItemOrderPage /> } />
                        <Route path="/user/perfil" element={<ProfilePage />} />
                        <Route path="/carrinho"  element={<CartPage />} />
                        <Route path="/finalizar-pedido" element={<ApproveOrderPage /> } />
                        <Route path="*"  element={<ErrorPage />} />
                    </Routes>
            </BrowserRouter>
    );
}

export default Router;
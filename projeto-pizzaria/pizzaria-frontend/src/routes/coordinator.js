export const goToHomePage = navigate => {
    navigate('/')
}

export const goToLoginPage = navigate => {
    navigate('/login')
}

export const goToRegisterPage = navigate => {
    navigate('/cadastre-se/registrar-endereco')
}

export const goToSignUpPage = navigate => {
    navigate('/cadastre-se')
}

export const goToAddRecipes = navigate => {
    navigate('/adicionar-receita')
}

export const goToCartPage = navigate => {
    navigate('/carrinho')
}

export const goToAdminPage = navigate => {
    navigate('/adminstrador')
}

export const goToEditRecipePage = (navigate, id) => {
    navigate(`/editar-receita/${id}`)
}

export const goToProfilePage = (navigate,id) => {
    navigate(`/user/perfil`)
}

export const goToApprovePurchase = (navigate) => {
    navigate(`/finalizar-pedido`)
}

export const goToOrderHistory = (navigate) => {
    navigate(`/user/perfil/historico-de-pedidos`)
}

export const goToItemOrderPage = (navigate, orderid ) => {
    navigate(`/user/perfil/itens-da-compra/${orderid}`)
}
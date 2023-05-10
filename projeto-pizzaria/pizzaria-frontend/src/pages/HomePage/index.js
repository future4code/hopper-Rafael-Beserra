import React, { useContext } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { CardsProductsListContainer, ProductsContainer } from "./styled";

function HomePage() {
  const { states, requests } = useContext(GlobalContext);
  const { recipes } = states;
  const { addToCart } = requests;
  const { removeProductFromCart } = requests;

  return (
    <CardsProductsListContainer>
      <Header />
      <ProductsContainer>
        <h3>SELECIONE OS ITENS DESEJADOS</h3>
        {recipes ? (
          recipes.map((product) => {
            return (
              <CardProducts
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                product={product}
                addToCart={addToCart}
                removeProductFromCart={removeProductFromCart}
              />
            );
          })
        ) : (
          <p> CARREGANDO </p>
        )}
      </ProductsContainer>
      <Footer />
    </CardsProductsListContainer>
  );
}

export default HomePage;

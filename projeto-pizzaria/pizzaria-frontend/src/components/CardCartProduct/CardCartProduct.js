import React from "react";
import { AddContainer, CartProduct, CartProductContainer, ContainerDown, ImageADD, ImageADD1, ImageProduct, OneComponent } from "./styled";
import add from "../../assents/add1.png";
import rem from "../../assents/rem1.png";

function CardCartProduct(props) {
    const {image, title, quantity, price} = props.product

    let priceTotalItem = Number(quantity * price);

    return(
            <CartProductContainer>
                <CartProduct>
                    <OneComponent>
                    <ImageProduct
                        src={image}
                        alt={title}
                    />
                      <h1>{title}</h1>  
                    </OneComponent>
                    {/* <p> {props.description} </p> */}
                    <ContainerDown>
                        <strong><p>Quantidade:{quantity} </p></strong>
                        <strong><p>Subtotal:{priceTotalItem}</p></strong>
                        
                        <AddContainer>
                            <ImageADD1 src={rem} onClick={ () => props.removeProductFromCart(props.product) } />
                            <ImageADD src={add} onClick={ () => props.addToCart(props.product) } />
                        </AddContainer>
                    </ContainerDown>
                </CartProduct>
            </CartProductContainer>
    )
}

export default CardCartProduct;
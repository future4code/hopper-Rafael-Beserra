import React from 'react';
import styled from "styled-components"

    
    const BigCardContainer = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
    `;
    const EditH4 = styled.h4`
        margin-bottom: 15px;
        `;
    const EditDiv = styled.div`   
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    `;

     const EditImagem = styled.img`
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    `;
function CardGrande(props) {

    return (
        <BigCardContainer>
                <EditImagem img src={ props.imagem }/> 
            <EditDiv>
                <EditH4>{ props.nome }</EditH4>
                <p>{ props.descricao }</p>
            </EditDiv>
        </BigCardContainer>
    )
}

export default CardGrande;
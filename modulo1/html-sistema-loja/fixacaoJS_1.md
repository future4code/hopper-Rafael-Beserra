function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salario = 2000
 let recebidoFixoPorCarro = qtdeCarrosVendidos * 100
 let porcentagemDasVendas = valorTotalVendas * 0.05
 let valorTotalRecebido = recebidoFixoPorCarro + salario + porcentagemDasVendas
 return valorTotalRecebido
}
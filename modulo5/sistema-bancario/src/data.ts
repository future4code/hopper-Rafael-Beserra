

export type usersTipe = {
    id:String,
    cpf:number,
    nascimento:string,
    saldo:number,
    extrato:extrato[],
}
export type extrato = {
    valor:number,
    descrição:string,
    dataPagamento:string
}


export const contas:usersTipe[]  = [

]
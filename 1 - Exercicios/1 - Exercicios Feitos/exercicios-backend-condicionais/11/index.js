const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos < 200000){
console.log(`O valor da parcela desse mês é de R$0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor minimo de R$2000 reais.`)
}
else if (totalJaPagoPeloAluno>=1800000){
console.log(`O valor da parcela desse mês é de R$0 reais. Nenhum valor é devido pois o total pago pelo estudante já alcançou o valor de 18 mil reais.`)
}
else if (mesesDecorridos>60){
console.log(`O valor da parcela desse mês é de R$0 reais. Nenhum valor é devido pois o tempo decorrido de contrato alcançou  os 60 meses.`)
}
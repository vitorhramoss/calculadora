function calcular(){
    alert("Bem vindo ao sistema de calculadora")
    let numero1 = Number(prompt("insira um numero: "))
    
    let numero2 = Number(prompt("Insira outro numero: "))

    let opcao = Number(prompt("Insira uma das opções de calculo abaixo\n" +
                               "1 - Soma" +
                               "\n2 - Subtração" +
                               "\n3 - Multiplicação" +
                               "\n4 - Divisão"
    ))
 
let resultado 

switch(opcao){
    case 1:
        if (resultado = numero1 + numero2)
        alert(`${numero1} + ${numero2} = ${resultado}`)
break
    case 2:
        resultado = numero1 - numero2
        alert(`${numero1} - ${numero2} = ${resultado}`)
break
    case 3:
        if (resultado = numero1 * numero2)
        alert(`${numero1} * ${numero2} = ${resultado}`)
break
    case 4:
        if(resultado = numero1 / numero2)
        alert(`${numero1} / ${numero2} = ${resultado}`)
    else if
       (numero1 = 0)
    alert("Não pode ser divisivel por 0")
    else 
         (numero2 = 0)
    alert("Não pode ser divisivel por 0")
break
    default:
    alert("Opção não listada, favor selecionar uma opção de 1 a 4")
    }



}
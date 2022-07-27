//var agora = new Date()
//var hora = agora.getHours()
//essa opção acima é para pegar a horaa do sistema
var hora = 10 
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else{
    console.log(`Boa noite!`)
}
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if(hora < 12 && hora >= 6) {
    console.log('Bom Dia')
} else if(hora >= 12 && hora <= 18) {
    console.log('Boa Tarde')
} else 
    console.log('Boa Noite')
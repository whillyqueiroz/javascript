var idade = 88
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota.')}
    else if (idade < 18) {
        console.log('voto opcional.')
    } else {
        console.log('voto obrigatório.')
    }
    if(idade >= 18 && idade < 40){
        console.log('Você é jovem.')
    }
    if(idade >= 40 && idade < 65){
        console.log('Você está na idade média.')
    }
    if(idade >= 65){
        console.log('você está na terceira idade.')
    }


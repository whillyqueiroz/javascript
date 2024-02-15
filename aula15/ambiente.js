let num = [5, 8, 4, 9, 6]
num.push(7)
num.sort()
num[5] = 3
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado!!')
} else {
    console.log(`A valor 5 está na posição ${pos}`)
}
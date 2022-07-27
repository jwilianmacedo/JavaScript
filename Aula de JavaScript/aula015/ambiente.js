let num = [5, 8, 2, 9, 3]
//lembrando que a ordem do num.sort() e num.push altera os valores
num.push(1)
num.sort()
console.log(num)
console.log(`o Vetor tem ${num.length} posições`)
console.log(`o primeiro valor o vetor é ${num[0]}`)
let pos = num.indexOf(8)
//o 8 aparece na posição 4 por conta do comando num.push(1) que ordenou o vetor em ordem crescente
console.log(`O valor 8 esta na posição ${pos}`)

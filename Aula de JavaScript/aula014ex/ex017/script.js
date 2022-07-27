function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1

        //esse parametro abaixo, serve para limpar o item gerado e colocar outro no lugar
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
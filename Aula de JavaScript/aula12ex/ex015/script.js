function verificar() {
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebemm.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemmm.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultomm.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosomm.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebeff.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemfff.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoff.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoff.jpg')
            }
        }
        res.style.textAlergin = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
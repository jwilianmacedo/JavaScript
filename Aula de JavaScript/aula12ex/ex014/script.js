function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getUTCHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'imagens/manhan.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'imagens/tarden.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        img.src = 'imagens/noiten.jpg'
        document.body.style.background = '#515154'
    }
}
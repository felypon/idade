function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    var pcor = document.getElementById('msg')
    pcor.style.color = '#ffedd7'
    pcor.style.textShadow = '0px 0px 2px black'
    pcor.style.fontWeight = 'bold'
    pcor.style.backgroundColor = 'rgba(50, 10, 0, 0.527)'
    pcor.style.margin = '30px 40px'
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#FFEDD7'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#CA9857'
    } else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#231F20'
        pcor.style.backgroundColor = 'rgba(0, 0, 0, 0.427)'
        pcor.style.margin = '30px 40px'
    }
}
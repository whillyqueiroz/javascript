function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dt = data.getDate()
    var ms = data.getMonth()
    var ano = data.getFullYear()
    msg.innerHTML = `Hora: ${hora} horas e ${min} minutos.<br> Data: ${dt}/${ms + 1}/${ano}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'aula12ex/ex014/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'aula12ex/ex014/fototarde.png'
        document.body.style.background = '#b9846f'
    } else{
        // BOA NOITE!
        img.src = 'aula12ex/ex014/fotonoite.png'
        document.body.style.background = '#515154'
    }
}
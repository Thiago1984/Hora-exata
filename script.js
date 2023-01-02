function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} : ${minutos} : ${segundos}.`
    setTimeout('carregar()', 500)
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ce9c42'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#0b7893'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4f4f4f'
    }
}
function alerta() {
    var data = new Date()
    var semana = data.getDay()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var dayName = Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    var monName = Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    alert(`Hoje é ${dayName[semana]}, dia ${dia} de ${monName[mes]} de ${ano}.`)
}
function carregar(){
    let imagem = document.getElementById('imagem')
    let msg = document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`

    if(hora >=0 && hora <12){
       imagem.src = "manhã.png"
       document.body.style.background = 'rgb(28, 161, 285)'
    }
    else if(hora >=12 && hora <18){
       imagem.src = "tarde1.png"
       document.body.style.background = 'rgb(238, 171, 28)'
    }
    else{
        imagem.src='noite.png'
        document.body.style.background = 'rgb(34, 34, 66)'
    }
}

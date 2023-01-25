function verificar(){
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
   

    if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero= ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <4){
            img.setAttribute('src','bebê-menino.png')
            }
            else if(idade <10){
            //criança
            img.setAttribute('src','criança-menino.png')
            }else if(idade <25){
                //jove adulto
                img.setAttribute('src','jovem-homem.png')
            }else if(idade<35){
             //adulto
             img.setAttribute('src','adulto.png')
            } else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <4){
                //bebe
                img.setAttribute('src','bebê-menina.png')
                }
                else if(idade <10){
                //criança
                img.setAttribute('src','criança-menina.png')
                }else if(idade <25){
                    //jove adulto
                    img.setAttribute('src','jovem-mulher.png')
                }else if(idade<35){
                 //adulto
                 img.setAttribute('src','adulta.png')
                } else{
                    //idoso
                    img.setAttribute('src','idosa.png')
                }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}

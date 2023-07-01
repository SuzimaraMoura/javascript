function carregar (){
    var msg= document.getElementById('msg')
    var img=document.getElementById('imagem')
    var data= new Date()
    var hora= 8  //data.getHours() // Para colocar a hora atual.
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora<12 ){
        //Bom dia!!
        img.src='imagens/manha.png'
        document.body.style.background='#637bc9e6'    
    } else if (hora>=12 && hora<=18) {
        //Boa tarde!!
        img.src='imagens/tarde.png'
        document.body.style.background='#a66b5fe6'
    } else {
        //Boa noite!
        img.src='imagens/noite.png'
        document.body.style.background='#3d1e02e6'
    }


}
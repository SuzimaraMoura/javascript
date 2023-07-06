function verificar () {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || fano.value >ano){
      window.alert('[ERRO]Verifique os dados e tente novamente')
   }else{
      var fsex= document.getElementsByName('radsex')
      var idade= ano-Number(fano.value)
      var genero=''
      var img=document.createElement('img')
      img.setAttribute('id','foto')
      if(fsex[0].checked){
         genero='Homem'
         if(idade>=0&&idade<10){ //Criança
            img.setAttribute('src','imagens/criança-masc.png')
         }else if(idade <21){ //Jovem
            img.setAttribute('src','imagens/jovem-masc.png')
         }else if(idade <56){ //Adulto
            img.setAttribute('src','imagens/adulto-masc.png')
         }else{ //Idoso
            img.setAttribute('src','imagens/idoso-masc.png')
         }
         

      }else if(fsex[1].checked){
         genero='Mulher'
         if(idade>=0&&idade<10){ //Criança
            img.setAttribute('src','imagens/criança-fem.png')
         }else if(idade <21){ //Jovem
            img.setAttribute('src','imagens/jovem-fem.png')
         }else if(idade <56){ //Adulto
            img.setAttribute('src','imagens/adulto-fem.png')
         }else{ //Idoso
            img.setAttribute('src','imagens/idoso-fem.png')
         } 
      }
      res.style.textAlign='center'
      res.innerHTML=`Detectamos ${genero} de ${idade} anos.`
      res.appendChild(img)
      

   }
}
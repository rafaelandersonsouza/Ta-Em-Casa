//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)
//Executar uma acao
function cloneField(){
    //Duplicar os campos. Que campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false
   // pegar os campos. Que campos?
   const fields = newFieldContainer.querySelectorAll('input')
   // para cada campo, limpar
   fields.forEach(function(field){
       //pega o field do momento e limpa ele
       field.value = ""
   })
   // Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = docmuent.querySelector('#bt_close')
let srcVal="";

for(let i=0, i<imagens.length; i++){
    imagens[i].addEventListener('click', function()){
      
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});





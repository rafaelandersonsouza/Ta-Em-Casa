(function(win, doc) {

	//Procurar o botão
	const button = doc.querySelector("#add-time");

	//Quando clicar no botao
	button.addEventListener('click', cloneField);

	//Executar uma acao
	function cloneField(){

    //Duplicar os campos. Que campos?
		const newFieldContainer = doc.querySelector('.schedule-item').cloneNode(true); // boolean: true or false
		// pegar os campos. Que campos?
		const fields = newFieldContainer.querySelectorAll('input');
		 // para cada campo, limpar
		 
   fields.forEach((field) => {
       //pega o field do momento e limpa ele
       field.value = "";
	 });
	 
   // Colocar na pagina. Onde?
    doc.querySelector('#schedule-items').appendChild(newFieldContainer);

	}
	
})(window, document);

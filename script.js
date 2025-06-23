function adicionarTarefa(){
    //recebe valor do input do usuario
            const inputTarefa = document.getElementById("inputTarefa");
            let tarefa = inputTarefa.value.trim(); //'value' para pegar o "valor" do input
    //(trim()) = nao deixa com espaço

    //Recebe o alerta
        let alerta = document.getElementById("campoVazio");

    //Nao deixa add tarefa que seja de campo vazio ou tenha somente um espaço
        if(tarefa === ""){
            alerta.classList.remove("d-none", "alert-success");//mostra o alerta caso esteja vazio
            alerta.classList.add("alert-danger");
            alerta.textContent = " Campo vazio, adicione uma tarefa válida!!";
            return;
        }
        
        //Cria novo item (li) e insere na (lista ul)
        const listaTarefa = document.getElementById("listaTarefa");
        let novaTarefa = document.createElement("li");
        //adiciona uma class do bootstrap a (li)
        novaTarefa.classList.add('list-group-item');
        novaTarefa.textContent = tarefa;
        //Mostrando onde a li deve ser criada;
        // "listaTarefa" esta amarzenando onde esta a <ul> no html.
        //"appendChil" = adiciona um elemento filho
        listaTarefa.appendChild(novaTarefa);

        alerta.classList.remove("d-none", "alert-danger");//remove alerta de erro e a cor
        alerta.classList.add("alert-success");
        alerta.textContent = "Tarefa adicionada com sucesso!"; //muda o texto do alerta
    
    
    //Limpa o input do usuario
        inputTarefa.value = "";
}
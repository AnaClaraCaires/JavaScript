let tarefas = [];
let alerta = document.getElementById("campoVazio");

function adicionarTarefa(){

    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
   
    if(tarefa === ""){
        alerta.classList.remove("d-none", "alert-success");//Faz o alerta aparecer e muda sua cor
        alerta.classList.add("alert-danger");//mostra o alerta caso esteja vazio em vermelho
        alerta.textContent = " Campo vazio, adicione uma tarefa válida!!";
        return;
    }else{
        alerta.classList.remove("d-none", "alert-danger");
        alerta.classList.add("alert-success");
        alerta.textContent = "Tarefa adicionada com sucesso!";
        //Adiciona o elemento do input a lista
        tarefas.push(tarefa)
        renderizarTarefas()
    }
    
    //Limpa o input do usuario
    inputTarefa.value = "";

}

function renderizarTarefas(){
    //Pega o (UL)
    const listaTarefa = document.getElementById("listaTarefa");
    //Limpar a lista para nao haver repeticao de itens 
    listaTarefa.innerHTML = "";

    for(let i=0; i<tarefas.length; i++){
        //Cria um elemento (li)
        let novaTarefa = document.createElement("li");
        //Adiciona class do bootstrap
        novaTarefa.classList.add("list-group-item", "d-flex", "justify-content-between");
        novaTarefa.textContent = tarefas[i];
        
        let botaoEditar = document.createElement("button");
        botaoEditar.classList.add("btn", "btn-outline-success");
        botaoEditar.textContent="Editar";
        botaoEditar.onclick = () => editarTarefa(i);
        novaTarefa.appendChild(botaoEditar);


        let botaoRemover = document.createElement("button");
        botaoRemover.classList.add("btn", "btn-outline-danger");
        botaoRemover.textContent = "Remover";
        //chama a função que queremos ao clicar
        //... (i) => "deixa usar 'i' na função "removerTarefa" "
        botaoRemover.onclick = () => removerTarefa(i);
        novaTarefa.appendChild(botaoRemover)

        //"appendChil" = adiciona um elemento filho que é a "novaTarefa"
        listaTarefa.appendChild(novaTarefa);
    }

    const botoes = document.getElementById("botoes");
    let btnLimpar = document.getElementById("btn-limparTudo");

    if(tarefas.length>0 && !btnLimpar){
        let botaoLimparTudo = document.createElement("button");
        botaoLimparTudo.id="btn-limparTudo";
        botaoLimparTudo.classList.add("btn", "btn-danger", "mt-");
        botaoLimparTudo.textContent="Limpar tudo";

        botaoLimparTudo.onclick = () => limparTudo();
        botoes.appendChild(botaoLimparTudo);
    }
    //Se a lista estiver vazia e existir botao, remove-lo
    if(tarefas.length === 0 && btnLimpar){
        btnLimpar.remove();
    }
}

function removerTarefa(i){
    // ... ("chega em qual tarefa vamos remover", "quantos itens vamos remover")
    tarefas.splice(i, 1);
    renderizarTarefas();
}
function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa: ");
    if(tarefaEditada.trim() != ""){
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
    
}

function limparTudo(){
    tarefas.length = 0;   
    renderizarTarefas();
    alert("Lista de tarefas limpa com sucesso!");
    
}
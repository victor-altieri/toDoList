//DECLARAÇÃO DE VARIÁVEIS

let tarefa = [];

//FUNÇÃO DE VALIDAÇÃO

const validarCampo = ()=>{
    let valida = false;
    if(document.getElementById("task").value == "") valida = true
    return valida;

}

//FUNÇÃO ADICIONAR TAREFA

function adicionarTarefa(){
    let linha = document.getElementById("task")

    if(validarCampo() == true){
        // alert("Preencha o campo Tarefa")
        Swal.fire({
            icon: "warning",
            title: "Atenção",
            text: "Preencha o campo tarefa",
            confirmButtonColor: "#000000FF",
            confirmButtonText: "ok",
        });
    }
    else{
        tarefa.push(linha.value);
        linha.value = "";
        listarTarefas();
        Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: "Tarefa adicionada com sucesso",
            confirmButtonColor: "#000000",
            confirmButtonText: "ok",
        })
    }
}

//FUNCAO ADICIONAR TAREFA COM ENTER
const taskInput =document.getElementById("task");

if(taskInput){
    taskInput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        adicionarTarefa();
    }
})
}

function listarTarefas(){
    let valor = '';
    for(let i=0; i < tarefa.length; i++){
        valor += `
        <div class="task-item">
                <span>${tarefa[i]}</span>
                <button id="editar-tarefa" onclick="editarTarefa(${i})">Editar</button>
                <button id="remover-tarefa" onclick="removerTarefa()">Remover Tarefa</button>
            </div>
        `
    }
    document.getElementById("lista").innerHTML = valor
}

function removerTarefa(i){
    // tarefa.pop();
    // listarTarefas();
    
    Swal.fire({
        icon: "warning",
        title: "Apagar tarefa",
        text: "Tem certeza que deseja apagar esta tarefa?",
        confirmButtonColor: "#000000",
        showCancelButton: true,
        confirmButtonText: "Sim, Remover",
        cancelButtonText: "Cancelar",
    }).then((result)=>{
        if(result.isConfirmed){
            tarefa.splice(i, 1);
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A tarefa foi removida da lista",
                "Success",
            )
        }
    })
}

//FUNÇÃO EDITAR TAREFA

function editarTarefa(indice){
    document.getElementById("task").value = tarefa[indice];
    indiceEditar = indice;
    document.getElementById("task").focus();
}

//FUNÇÃO SALVAR TAREFA

function salvarTarefa(){
    if(validarCampo()){
        alert("Preencha o campo tarefa")
    }else if(indiceEditar !== -1){
        tarefa[indiceEditar]=document.getElementById("task").value;
        document.getElementById("task").value ="";
        listarTarefas();
        Swal.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Tarefa salva com sucesso",
            confirmButtonColor: "#000000FF",
            confirmButtonText: "OK",
        });
    }
    else{
        console.log("nenhuma tarefa selecionada")
    }
    document.getElementById("task").focus();
    
    
}

//FUNÇÃO ENTER



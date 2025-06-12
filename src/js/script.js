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

function listarTarefas(){
    let valor = '';
    for(let i=0; i < tarefa.length; i++){
        valor += tarefa[i] + '<br>';
    }
    document.getElementById("lista").innerHTML = valor
}

function removerTarefa(){
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
            tarefa.pop();
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A tarefa foi removida da lista",
                "Success",
            )
        }
    })
}
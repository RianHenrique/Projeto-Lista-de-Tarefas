let cont = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')


function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        cont ++

        let novoItem = `<div id="${cont}" class="item">
            <div onclick="marcarTarefa(${cont})" class="item-icone">
                <i id="icone_${cont}" class="material-symbols-outlined">
                    circle
                </i>
            </div>
            <div onclick="marcarTarefa(${cont})" class="item-nome">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button onclick="deletar(${cont})" class="delete" style="line-height: 40px"><i class="material-symbols-outlined" style="position: relative; top: 7.5px; padding-right: 3px">delete</i>Deletar</button>
            </div>
        </div>`;

        main.innerHTML += novoItem

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if (classe == "item") {
        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id)
        icone.classList.add("check_circle")
        icone.innerHTML = "check_circle"

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado")

        var icone = document.getElementById("icone_" + id)
        icone.classList.remove("check_circle")
        icone.innerHTML = "circle"
    }
}

input.addEventListener("keyup", function (event) {
    if(event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})

const cards = document.querySelectorAll(".card");
const resumo = document.getElementById("resumo");
const btnlimpar = document.getElementById("limpar");

// Atualiza a quantidade de livros selecionados
function atualizarResumo() {

    const selecionados = document.querySelectorAll(
        ".card.selecionado"
    ).length;

    if (selecionados === 0) {
        resumo.textContent = "Nenhum item selecionado.";
    } 
    else if (selecionados === 1) {
        resumo.textContent = "1 livro selecionado.";
    } 
    else {
        resumo.textContent = selecionados + " livros selecionados.";
    }
}

// Permite selecionar e desselecionar os livros
cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("selecionado");

        atualizarResumo();

    });

});

// Botão para limpar todas as seleções
btnlimpar.addEventListener("click", () => {

    cards.forEach((card) => {
        card.classList.remove("selecionado");
    });

    atualizarResumo();

});

// Atualiza o resumo ao abrir a página
atualizarResumo();

function mostrarCalculadora(id) {
    const calculadoras = document.querySelectorAll(".calculadora");

    calculadoras.forEach(secao => {
        secao.classList.add("oculta");
    });

    const secaoSelecionada = document.getElementById(id);

    if (secaoSelecionada) {
        secaoSelecionada.classList.remove("oculta");
    }
}

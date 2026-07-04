document.addEventListener("DOMContentLoaded", () => {
    mostrarCalculadora("diluicao");

    if (document.getElementById("modoMolaridade")) {
        alterarModoMolaridade();
    }

    if (document.getElementById("modoSolucao")) {
        alterarModoSolucao();
    }

    console.log("LabCalc iniciado com sucesso.");
});

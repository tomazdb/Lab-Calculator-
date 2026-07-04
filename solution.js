function calcularSolucao() {
    const modo = document.getElementById("modoSolucao").value;
    const resultado = document.getElementById("resultadoSolucao");

    if (modo === "po") {
        const mm = parseFloat(document.getElementById("solMM").value);
        const M = parseFloat(document.getElementById("solMolaridade").value);
        const V = parseFloat(document.getElementById("solVolume").value);

        if (!valorPositivo(mm) || !valorPositivo(M) || !valorPositivo(V)) {
            alert("Preencha todos os campos com valores maiores que zero.");
            return;
        }

        const massa = mm * M * V;
        const texto = `Massa necessária = ${massa.toFixed(6)} g`;

        resultado.innerHTML = texto;
        definirResultado(texto);
    } else {
        const C1 = parseFloat(document.getElementById("estoque").value);
        const C2 = parseFloat(document.getElementById("final").value);
        const V2 = parseFloat(document.getElementById("volumeFinal").value);

        if (!valorPositivo(C1) || !valorPositivo(C2) || !valorPositivo(V2)) {
            alert("Preencha todos os campos com valores maiores que zero.");
            return;
        }

        if (C2 >= C1) {
            alert("A concentração final deve ser menor que a concentração estoque.");
            return;
        }

        const V1 = (C2 * V2) / C1;
        const solvente = V2 - V1;

        const textoTela = `
            Volume da solução estoque: ${V1.toFixed(4)} mL<br>
            Adicionar solvente: ${solvente.toFixed(4)} mL
        `;

        const textoCopiar =
            `Volume da solução estoque: ${V1.toFixed(4)} mL\n` +
            `Adicionar solvente: ${solvente.toFixed(4)} mL`;

        resultado.innerHTML = textoTela;
        definirResultado(textoCopiar);
    }
}

function alterarModoSolucao() {
    const modo = document.getElementById("modoSolucao").value;

    document.getElementById("blocoPo").style.display = "none";
    document.getElementById("blocoDiluicao").style.display = "none";

    if (modo === "po") {
        document.getElementById("blocoPo").style.display = "block";
    } else {
        document.getElementById("blocoDiluicao").style.display = "block";
    }
}

function limparSolucao() {
    limparCampos([
        "solMM",
        "solMolaridade",
        "solVolume",
        "estoque",
        "final",
        "volumeFinal"
    ]);

    document.getElementById("resultadoSolucao").innerHTML = "Aguardando cálculo...";
    definirResultado("");
}

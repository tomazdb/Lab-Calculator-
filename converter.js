const unidadesConcentracao = {
    "M": 1,
    "mM": 1e-3,
    "µM": 1e-6,
    "nM": 1e-9,
    "pM": 1e-12
};

const unidadesMassa = {
    "kg": 1000,
    "g": 1,
    "mg": 1e-3,
    "µg": 1e-6,
    "ng": 1e-9,
    "pg": 1e-12
};

const unidadesVolume = {
    "L": 1,
    "mL": 1e-3,
    "µL": 1e-6,
    "nL": 1e-9,
    "pL": 1e-12
};

function converterUnidade(valor, origem, destino, tabela) {
    if (!(origem in tabela) || !(destino in tabela)) {
        throw new Error("Unidade inválida.");
    }

    const valorBase = valor * tabela[origem];
    return valorBase / tabela[destino];
}

function formatarConversao(resultado, destino) {
    return `${Number(resultado).toPrecision(8)} ${destino}`;
}

function converterConcentracao() {
    const valor = parseFloat(document.getElementById("concValor").value);
    const origem = document.getElementById("concOrigem").value;
    const destino = document.getElementById("concDestino").value;

    if (isNaN(valor) || valor < 0) {
        alert("Informe um valor válido maior ou igual a zero.");
        return;
    }

    const resultado = converterUnidade(valor, origem, destino, unidadesConcentracao);
    const texto = formatarConversao(resultado, destino);

    document.getElementById("resultadoConcentracao").innerHTML = texto;
    definirResultado(texto);
}

function converterMassa() {
    const valor = parseFloat(document.getElementById("massaValor").value);
    const origem = document.getElementById("massaOrigem").value;
    const destino = document.getElementById("massaDestino").value;

    if (isNaN(valor) || valor < 0) {
        alert("Informe um valor válido maior ou igual a zero.");
        return;
    }

    const resultado = converterUnidade(valor, origem, destino, unidadesMassa);
    const texto = formatarConversao(resultado, destino);

    document.getElementById("resultadoMassa").innerHTML = texto;
    definirResultado(texto);
}

function converterVolume() {
    const valor = parseFloat(document.getElementById("volumeValor").value);
    const origem = document.getElementById("volumeOrigem").value;
    const destino = document.getElementById("volumeDestino").value;

    if (isNaN(valor) || valor < 0) {
        alert("Informe um valor válido maior ou igual a zero.");
        return;
    }

    const resultado = converterUnidade(valor, origem, destino, unidadesVolume);
    const texto = formatarConversao(resultado, destino);

    document.getElementById("resultadoVolume").innerHTML = texto;
    definirResultado(texto);
}

function limparConversores() {
    limparCampos([
        "concValor",
        "massaValor",
        "volumeValor"
    ]);

    document.getElementById("resultadoConcentracao").innerHTML = "Aguardando cálculo...";
    document.getElementById("resultadoMassa").innerHTML = "Aguardando cálculo...";
    document.getElementById("resultadoVolume").innerHTML = "Aguardando cálculo...";

    definirResultado("");
}

/* ==========================================================
   TABELAS DE CONVERSÃO
========================================================== */

const concentracao = {

    "M":1,

    "mM":1e-3,

    "µM":1e-6,

    "nM":1e-9,

    "pM":1e-12

};


const massa = {

    "kg":1000,

    "g":1,

    "mg":1e-3,

    "µg":1e-6,

    "ng":1e-9,

    "pg":1e-12

};


const volume = {

    "L":1,

    "mL":1e-3,

    "µL":1e-6,

    "nL":1e-9,

    "pL":1e-12

};

/* ==========================================================
   CONVERSOR UNIVERSAL
========================================================== */

function converter(valor, origem, destino, tabela){

    const base = valor * tabela[origem];

    return base / tabela[destino];

}

function converterConcentracao(){

    const valor =
    parseFloat(document.getElementById("concValor").value);

    const origem =
    document.getElementById("concOrigem").value;

    const destino =
    document.getElementById("concDestino").value;

    if(isNaN(valor)){

        alert("Informe um valor.");

        return;

    }

    const resultado =
    converter(
        valor,
        origem,
        destino,
        concentracao
    );

    resultadoAtual =
    resultado.toPrecision(8)+" "+destino;

    document.getElementById(
        "resultadoConcentracao"
    ).innerHTML=

    resultadoAtual;

}

function converterMassa(){

    const valor =
    parseFloat(document.getElementById("massaValor").value);

    const origem =
    document.getElementById("massaOrigem").value;

    const destino =
    document.getElementById("massaDestino").value;

    if(isNaN(valor)){

        alert("Informe um valor.");

        return;

    }

    const resultado =
    converter(
        valor,
        origem,
        destino,
        massa
    );

    resultadoAtual =
    resultado.toPrecision(8)+" "+destino;

    document.getElementById(
        "resultadoMassa"
    ).innerHTML=

    resultadoAtual;

}

function converterVolume(){

    const valor =
    parseFloat(document.getElementById("volumeValor").value);

    const origem =
    document.getElementById("volumeOrigem").value;

    const destino =
    document.getElementById("volumeDestino").value;

    if(isNaN(valor)){

        alert("Informe um valor.");

        return;

    }

    const resultado =
    converter(
        valor,
        origem,
        destino,
        volume
    );

    resultadoAtual =
    resultado.toPrecision(8)+" "+destino;

    document.getElementById(
        "resultadoVolume"
    ).innerHTML=

    resultadoAtual;

}

function limparConversores(){

    const ids=[

        "concValor",

        "massaValor",

        "volumeValor"

    ];

    ids.forEach(id=>{

        const campo=document.getElementById(id);

        if(campo){

            campo.value="";

        }

    });

    document.getElementById(
        "resultadoConcentracao"
    ).innerHTML="Aguardando cálculo...";

    document.getElementById(
        "resultadoMassa"
    ).innerHTML="Aguardando cálculo...";

    document.getElementById(
        "resultadoVolume"
    ).innerHTML="Aguardando cálculo...";

    resultadoAtual="";

}


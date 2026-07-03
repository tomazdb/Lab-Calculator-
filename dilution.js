/* ==========================================================
   LabCalc - Laboratory Calculator Suite
   script.js
   Autor: Débora Borges
   ========================================================== */


/* ==========================================================
   NAVEGAÇÃO ENTRE AS CALCULADORAS
   ========================================================== */

function mostrarCalculadora(id){

    const calculadoras = document.querySelectorAll(".calculadora");

    calculadoras.forEach(secao => {
        secao.classList.add("oculta");
    });

    document.getElementById(id).classList.remove("oculta");

}


/* ==========================================================
   VARIÁVEL GLOBAL
   ========================================================== */

let resultadoAtual = "";


/* ==========================================================
   COPIAR RESULTADO
   ========================================================== */

function copiarResultado(){

    if(resultadoAtual === ""){

        alert("Nenhum resultado disponível.");

        return;

    }

    navigator.clipboard.writeText(resultadoAtual);

    alert("Resultado copiado para a área de transferência!");

}


/* ==========================================================
   LIMPAR CAMPOS
   ========================================================== */

function limparCampos(ids){

    ids.forEach(id => {

        const campo = document.getElementById(id);

        if(campo){

            campo.value = "";

        }

    });

}


/* ==========================================================
   LIMPAR RESULTADO
   ========================================================== */

function limparResultado(idResultado){

    const elemento = document.getElementById(idResultado);

    if(elemento){

        elemento.innerHTML = "Aguardando cálculo...";

    }

    resultadoAtual = "";

}


/* ==========================================================
   FORMATAR NÚMEROS
   ========================================================== */

function formatarNumero(numero){

    return Number(numero).toLocaleString("pt-BR",{

        maximumFractionDigits:6

    });

}


/* ==========================================================
   VALIDAR NÚMERO
   ========================================================== */

function validarNumero(valor){

    return !isNaN(valor) && valor > 0;

}


/* ==========================================================
   CALCULADORA DE DILUIÇÕES
   C1V1 = C2V2
   ========================================================== */

function calcularDiluicao(){

    const c1 = document.getElementById("c1");
    const v1 = document.getElementById("v1");
    const c2 = document.getElementById("c2");
    const v2 = document.getElementById("v2");

    const resultado = document.getElementById("resultadoDiluicao");

    const valores = [

        c1.value,
        v1.value,
        c2.value,
        v2.value

    ];

    let camposVazios = valores.filter(v => v === "").length;

    if(camposVazios !== 1){

        alert("Deixe apenas UM campo vazio.");

        return;

    }

    let C1 = parseFloat(c1.value);
    let V1 = parseFloat(v1.value);
    let C2 = parseFloat(c2.value);
    let V2 = parseFloat(v2.value);

    if(c1.value === ""){

        C1 = (C2 * V2) / V1;

        c1.value = C1.toFixed(6);

        resultadoAtual = `C₁ = ${formatarNumero(C1)}`;

    }

    else if(v1.value === ""){

        V1 = (C2 * V2) / C1;

        v1.value = V1.toFixed(6);

        resultadoAtual = `V₁ = ${formatarNumero(V1)} mL`;

    }

    else if(c2.value === ""){

        C2 = (C1 * V1) / V2;

        c2.value = C2.toFixed(6);

        resultadoAtual = `C₂ = ${formatarNumero(C2)}`;

    }

    else{

        V2 = (C1 * V1) / C2;

        v2.value = V2.toFixed(6);

        resultadoAtual = `V₂ = ${formatarNumero(V2)} mL`;

    }

    resultado.innerHTML = resultadoAtual;

}


/* ==========================================================
   CALCULADORA DE MOLARIDADE
   (será implementada)
   ========================================================== */

function calcularMolaridade(){

    alert("Em desenvolvimento.");

}


/* ==========================================================
   PREPARO DE SOLUÇÕES
   ========================================================== */

function calcularSolucao(){

    alert("Em desenvolvimento.");

}


/* ==========================================================
   CONVERSOR DE CONCENTRAÇÃO
   ========================================================== */

function converterConcentracao(){

    alert("Em desenvolvimento.");

}


/* ==========================================================
   CONVERSOR MASSA / VOLUME
   ========================================================== */

function converterUnidades(){

    alert("Em desenvolvimento.");

}


/* ==========================================================
   MENSAGEM INICIAL
   ========================================================== */

window.onload = function(){

    console.log("===================================");

    console.log("LabCalc iniciado com sucesso");

    console.log("Versão 1.0");

    console.log("===================================");

}

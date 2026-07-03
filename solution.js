/* ==========================================================
   PREPARO DE SOLUÇÕES
========================================================== */

function calcularSolucao(){

    const modo =
    document.getElementById("modoSolucao").value;

    const resultado =
    document.getElementById("resultadoSolucao");

    /* ------------------------------
       PREPARO A PARTIR DE PÓ
    -------------------------------*/

    if(modo==="po"){

        const mm =
        parseFloat(document.getElementById("solMM").value);

        const M =
        parseFloat(document.getElementById("solMolaridade").value);

        const V =
        parseFloat(document.getElementById("solVolume").value);

        if(
            isNaN(mm) ||
            isNaN(M) ||
            isNaN(V)
        ){

            alert("Preencha todos os campos.");

            return;

        }

        if(
            mm<=0 ||
            M<=0 ||
            V<=0
        ){

            alert("Valores devem ser maiores que zero.");

            return;

        }

        const massa = mm*M*V;

        resultadoAtual =
        massa.toFixed(6)+" g";

        resultado.innerHTML=
        "<strong>Massa necessária:</strong><br>"
        +resultadoAtual;

    }

    /* ------------------------------
       PREPARO POR DILUIÇÃO
    -------------------------------*/

    else{

        const C1 =
        parseFloat(document.getElementById("estoque").value);

        const C2 =
        parseFloat(document.getElementById("final").value);

        const V2 =
        parseFloat(document.getElementById("volumeFinal").value);

        if(
            isNaN(C1) ||
            isNaN(C2) ||
            isNaN(V2)
        ){

            alert("Preencha todos os campos.");

            return;

        }

        if(
            C1<=0 ||
            C2<=0 ||
            V2<=0
        ){

            alert("Valores devem ser maiores que zero.");

            return;

        }

        if(C2>=C1){

            alert(
            "A concentração final deve ser menor que a concentração estoque."
            );

            return;

        }

        const V1=(C2*V2)/C1;

        const solvente=V2-V1;

        resultadoAtual=

        "Volume da solução estoque: "

        +V1.toFixed(4)

        +" mL<br><br>"

        +"Adicionar solvente: "

        +solvente.toFixed(4)

        +" mL";

        resultado.innerHTML=resultadoAtual;

    }

}

/* ==========================================================
   ALTERAR MODO
========================================================== */

function alterarModoSolucao(){

    const modo =
    document.getElementById("modoSolucao").value;

    document.getElementById("blocoPo")
    .style.display="none";

    document.getElementById("blocoDiluicao")
    .style.display="none";

    if(modo==="po"){

        document.getElementById("blocoPo")
        .style.display="block";

    }

    else{

        document.getElementById("blocoDiluicao")
        .style.display="block";

    }

}

/* ==========================================================
   LIMPAR SOLUÇÃO
========================================================== */

function limparSolucao(){

    const campos=[

        "solMM",

        "solMolaridade",

        "solVolume",

        "estoque",

        "final",

        "volumeFinal"

    ];

    campos.forEach(id=>{

        const campo=document.getElementById(id);

        if(campo){

            campo.value="";

        }

    });

    resultadoAtual="";

    document.getElementById(
        "resultadoSolucao"
    ).innerHTML="Aguardando cálculo...";

}


/* ==========================================================
   CALCULADORA DE MOLARIDADE
========================================================== */

function calcularMolaridade(){

    const modo =
    document.getElementById("modoMolaridade").value;

    const resultado =
    document.getElementById("resultadoMolaridade");

    if(modo==="calcularM"){

        const massa =
        parseFloat(document.getElementById("massa").value);

        const mm =
        parseFloat(document.getElementById("massaMolecular").value);

        const volume =
        parseFloat(document.getElementById("volume").value);

        if(
            isNaN(massa) ||
            isNaN(mm) ||
            isNaN(volume)
        ){

            alert("Preencha todos os campos.");

            return;

        }

        if(
            massa<=0 ||
            mm<=0 ||
            volume<=0
        ){

            alert("Valores devem ser maiores que zero.");

            return;

        }

        const molaridade =
        massa/(mm*volume);

        resultadoAtual =
        molaridade.toFixed(6)+" M";

        resultado.innerHTML=
        "<strong>Molaridade:</strong> "
        +resultadoAtual;

    }

    else{

        const M =
        parseFloat(document.getElementById("molaridade").value);

        const MM =
        parseFloat(document.getElementById("massaMolecular2").value);

        const V =
        parseFloat(document.getElementById("volume2").value);

        if(
            isNaN(M) ||
            isNaN(MM) ||
            isNaN(V)
        ){

            alert("Preencha todos os campos.");

            return;

        }

        if(
            M<=0 ||
            MM<=0 ||
            V<=0
        ){

            alert("Valores devem ser maiores que zero.");

            return;

        }

        const massa =
        M*MM*V;

        resultadoAtual =
        massa.toFixed(6)+" g";

        resultado.innerHTML=
        "<strong>Massa necessária:</strong> "
        +resultadoAtual;

    }

}

/* ==========================================================
   ALTERAR MODO
========================================================== */

function alterarModoMolaridade(){

    const modo =
    document.getElementById("modoMolaridade").value;

    document.getElementById("blocoMolaridade")
    .style.display="none";

    document.getElementById("blocoMassa")
    .style.display="none";

    if(modo==="calcularM"){

        document.getElementById("blocoMolaridade")
        .style.display="block";

    }

    else{

        document.getElementById("blocoMassa")
        .style.display="block";

    }

}

/* ==========================================================
   LIMPAR MOLARIDADE
========================================================== */

function limparMolaridade(){

    const campos=[

        "massa",

        "massaMolecular",

        "volume",

        "molaridade",

        "massaMolecular2",

        "volume2"

    ];

    campos.forEach(id=>{

        const campo=document.getElementById(id);

        if(campo){

            campo.value="";

        }

    });

    resultadoAtual="";

    document.getElementById(
        "resultadoMolaridade"
    ).innerHTML="Aguardando cálculo...";

}

copiarResultado()

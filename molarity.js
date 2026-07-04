function calcularMolaridade() {
    const modo = document.getElementById("modoMolaridade").value;
    const resultado = document.getElementById("resultadoMolaridade");

    if (modo === "calcularM") {
        const massa = parseFloat(document.getElementById("molMassa").value);
        const mm = parseFloat(document.getElementById("molMM").value);
        const volume = parseFloat(document.getElementById("molVolume").value);

        if (!valorPositivo(massa) || !valorPositivo(mm) || !valorPositivo(volume)) {
            alert("Preencha todos os campos com valores maiores que zero.");
            return;
        }

        const molaridade = massa / (mm * volume);
        const texto = `Molaridade = ${molaridade.toFixed(6)} M`;

        resultado.innerHTML = texto;
        definirResultado(texto);
    } else {
        const M = parseFloat(document.getElementById("molMolaridade").value);
        const MM = parseFloat(document.getElementById("molMM2").value);
        const V = parseFloat(document.getElementById("molVolume2").value);

        if (!valorPositivo(M) || !valorPositivo(MM) || !valorPositivo(V)) {
            alert("Preencha todos os campos com valores maiores que zero.");
            return;
        }

        const massa = M * MM * V;
        const texto = `Massa necessária = ${massa.toFixed(6)} g`;

        resultado.innerHTML = texto;
        definirResultado(texto);
    }
}

function alterarModoMolaridade() {
    const modo = document.getElementById("modoMolaridade").value;

    document.getElementById("blocoMolaridade").style.display = "none";
    document.getElementById("blocoMassa").style.display = "none";

    if (modo === "calcularM") {
        document.getElementById("blocoMolaridade").style.display = "block";
    } else {
        document.getElementById("blocoMassa").style.display = "block";
    }
}

function limparMolaridade() {
    limparCampos([
        "molMassa",
        "molMM",
        "molVolume",
        "molMolaridade",
        "molMM2",
        "molVolume2"
    ]);

    document.getElementById("resultadoMolaridade").innerHTML = "Aguardando cálculo...";
    definirResultado("");
}

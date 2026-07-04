function calcularDiluicao() {
    const c1 = document.getElementById("c1");
    const v1 = document.getElementById("v1");
    const c2 = document.getElementById("c2");
    const v2 = document.getElementById("v2");
    const resultado = document.getElementById("resultadoDiluicao");

    const valores = [
        c1.value.trim(),
        v1.value.trim(),
        c2.value.trim(),
        v2.value.trim()
    ];

    const camposVazios = valores.filter(v => v === "").length;

    if (camposVazios !== 1) {
        alert("Deixe apenas UM campo vazio.");
        return;
    }

    let C1 = parseFloat(c1.value);
    let V1 = parseFloat(v1.value);
    let C2 = parseFloat(c2.value);
    let V2 = parseFloat(v2.value);

    const valoresPreenchidos = [C1, V1, C2, V2].filter(v => !isNaN(v));

    if (valoresPreenchidos.some(v => v <= 0)) {
        alert("Todos os valores preenchidos devem ser maiores que zero.");
        return;
    }

    let texto = "";

    if (c1.value.trim() === "") {
        C1 = (C2 * V2) / V1;
        c1.value = C1.toFixed(6);
        texto = `C₁ = ${formatarNumero(C1)}`;
    } else if (v1.value.trim() === "") {
        V1 = (C2 * V2) / C1;
        v1.value = V1.toFixed(6);
        texto = `V₁ = ${formatarNumero(V1)} mL`;
    } else if (c2.value.trim() === "") {
        C2 = (C1 * V1) / V2;
        c2.value = C2.toFixed(6);
        texto = `C₂ = ${formatarNumero(C2)}`;
    } else {
        V2 = (C1 * V1) / C2;
        v2.value = V2.toFixed(6);
        texto = `V₂ = ${formatarNumero(V2)} mL`;
    }

    resultado.innerHTML = texto;
    definirResultado(texto);
}

function limparDiluicao() {
    limparCampos(["c1", "v1", "c2", "v2"]);

    document.getElementById("resultadoDiluicao").innerHTML = "Aguardando cálculo...";
    definirResultado("");
}

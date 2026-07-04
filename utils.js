let resultadoAtual = "";

function definirResultado(texto) {
    resultadoAtual = texto;
}

function copiarResultado() {
    if (!resultadoAtual || resultadoAtual.trim() === "") {
        alert("Nenhum resultado disponível.");
        return;
    }

    navigator.clipboard.writeText(resultadoAtual)
        .then(() => {
            alert("Resultado copiado!");
        })
        .catch(() => {
            alert("Não foi possível copiar o resultado.");
        });
}

function formatarNumero(numero, casas = 6) {
    return Number(numero).toLocaleString("pt-BR", {
        maximumFractionDigits: casas
    });
}

function limparCampos(ids) {
    ids.forEach(id => {
        const campo = document.getElementById(id);

        if (campo) {
            campo.value = "";
        }
    });
}

function valorPositivo(valor) {
    return !isNaN(valor) && valor > 0;
}

function codificar(texto) {
   texto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
   return texto;
};

function descodificar(texto) {
    texto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return texto;
};

function validarEntrada(entrada) {
    var retorno = false;
    if (entrada.toLowerCase() != entrada) {
        alert("Por favor, insira apenas letras minúsculas e sem acento.");
        retorno = true;
    };
    return retorno;
};

document.getElementById("btn-cripto").addEventListener("click", function (event) {
    event.preventDefault();
    var textoCodificado = document.getElementById("input-texto").value;
    if (validarEntrada(textoCodificado)) {
        return;
    };
    document.getElementById("msg").value = codificar(textoCodificado);
});

document.getElementById("btn-descripto").addEventListener("click", function (event) {
    event.preventDefault();
    var textoCodificado = document.getElementById("input-texto").value;
    if(validarEntrada(textoCodificado)){
        return;
    };
    document.getElementById("msg").value = descodificar(textoCodificado);
});

document.getElementById("btn-copy").addEventListener("click", function () {
    var copyText = document.getElementById("msg");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("O texto foi copiado.");
})
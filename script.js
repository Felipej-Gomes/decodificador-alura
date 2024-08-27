let entradaTexto = document.getElementById('entrada');  
let saidaTexto = document.getElementById('saida');      

let botaoCriptografar = document.querySelector('.bnt-encripita');  
let botaoDescriptografar = document.querySelector('.bnt-desencripta');  
let botaoCopiar = document.querySelector('.bnt-copia');  // 

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}


function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;  
    return regex.test(texto);
}


function criptografar() {
    let textoOriginal = entradaTexto.value;

   
    if (validarTexto(textoOriginal)) {
        let textoCriptografado = criptografarTexto(textoOriginal);
        saidaTexto.value = textoCriptografado;
    } else {
        alert('O texto deve conter apenas letras minúsculas e espaços.');
        entradaTexto.value = '';  
        saidaTexto.value = '';    
    }
}


function descriptografar() {
    let textoCriptografado = entradaTexto.value;

    
    if (validarTexto(textoCriptografado)) {
        let textoDescriptografado = descriptografarTexto(textoCriptografado);
        saidaTexto.value = textoDescriptografado;
    } else {
        alert('O texto deve conter apenas letras minúsculas e espaços.');
        entradaTexto.value = '';  
        saidaTexto.value = '';   
    }
}


function copiarTexto() {
    
    saidaTexto.select();
   
    document.execCommand('copy');
    
    alert('Texto copiado para a área de transferência!');
}


botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiarTexto);
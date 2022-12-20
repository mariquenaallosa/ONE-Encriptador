let texto = document.getElementById("txt-input").value;

let btnEncriptar = document.querySelector('.btn-encriptar');
let btnDesencriptar = document.querySelector('.btn-desencriptar');
let btnCopiar = document.querySelector('.btn-copiar');



btnEncriptar.addEventListener('click', ()=>{
    let prueba = document.querySelector('#prueba');
    prueba.textContent = texto;
})
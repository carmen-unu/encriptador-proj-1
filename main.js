const textArea=document.querySelector(".area_texto");
const mensaje=document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptarBut(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.styles.backgroundImage="none";
}

function encriptar(stringEncriptar){
    let matrizCode=[["e","enter"], ["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]];
    console.table(matrizCode);
    stringEncriptar=stringEncriptar.toLowerCase();

    for(let i=0;i<matrizCode.length;i++){
        if(stringEncriptar.includes(matrizCode[i][0])){
            stringEncriptar=stringEncriptar.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptarBut(){
    const textoEncriptado=desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptar){
    let matrizCode=[["e","enter"], ["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]];
    console.table(matrizCode);
    stringDesencriptar=stringDesencriptar.toLowerCase();

    for(let i=0;i<matrizCode.length;i++){
        if(stringDesencriptar.includes(matrizCode[i][1])){
            stringDesencriptar=stringDesencriptar.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return stringDesencriptar;
}

function copiar() {
    let copiar = navigator.clipboard.writeText(mensaje.value);
    mensaje.select();
    return copiar;
}

/** función de texto animado */

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¡Bienvenido al encriptador de texto!')
  .pauseFor(200)
  .deleteChars(10)
  .start();



//variables
let numeroSecreto = 0 ;
let intentos = 0 ;
let listaNumerosSorteados =[];
let numeroMaximo= 100;
//esta funcion facilita la asignación de valores a los objetos de HTML

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? `vez`: `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
            if(numeroDeUsuario>numeroSecreto) {
                asignarTextoElemento ('p', 'El número secreto es menor')
            } else {
                asignarTextoElemento ('p', 'El número secreto es mayor')
            }
            intentos++;
            limpiarCaja();
        }
    return;
}

function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    
    let numeroGenerado = numeroSecreto = Math.floor(Math.random()*numeroMaximo)+ 1;
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){    
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else {
    //si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto')
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto= generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego() {
    // limpiar caja 
    limpiarCaja();
     //Indicar mensajes Iniciales 
    //Generar el numero aleatorio 
   //inicializar el número de intentos 
    condicionesIniciales();
   //deshabilitar el boton del juego 
   document.querySelector('#reiniciar').setAttribute('disabled', 'true')

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    

}


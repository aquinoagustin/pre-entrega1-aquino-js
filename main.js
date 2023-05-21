let nombreUsuario;
let mensaje;
let num1;
let num2;
let resultado = 0;
let total = 0;
let sumador = 0;
let numP = 0;
let numI = 0;

// Probamos las funciones flecha =>
let sumar = (num1,num2) => {return num1 + num2} //Sumar
let restar = (num1,num2) => {return num1 - num2} //Restar
let multiplicar = (num1,num2) => {return num1 * num2} //Multiplicar
let dividir = (num1,num2) => { //Dividir, Aca hacemos una comprobacion, para no dividir un 0
    if(num1 != 0)
        return num1 / num2;
        else
        return 0;
}

//Ciclo donde el usuario ingresa su nombre, no acepta espacios
do{
    nombreUsuario = prompt('Ingresa tu nombre (Asegurate de escribir algo)');
    nombreUsuario.trim();
}
while(!nombreUsuario)
alert('Bienvenido ' +nombreUsuario);

// Ciclo donde el usuario usa la calculadora con un menu interactivo
do{
    mensaje = parseFloat(prompt('Bienvenido a la calculadora virtual,!!\n1.Sumar\n2.Restar\n3.multiplicar\n4.Dividir\n5.Salir'))
    switch(mensaje){
        case 1:
            alert('Elegiste sumar!!\n')
            num1 = pedirNumero();
            num2 = pedirNumero();
            resultado = sumar(num1,num2);
            mostrarMensaje(resultado);
            if(esPar(resultado))
                numP++;
            else
                numI++;
        break;
        case 2:
            alert('Elegiste restar!!\n')
            num1 = pedirNumero();
            num2 = pedirNumero();
            resultado = restar(num1,num2);
            mostrarMensaje(resultado);
            if(esPar(resultado))
                numP++;
            else
                 numI++;
        break;
        case 3:
            alert('Elegiste multiplicar!!\n')
            num1 = pedirNumero();
            num2 = pedirNumero();    
            resultado = multiplicar(num1,num2);
            mostrarMensaje(resultado);
            if(esPar(resultado))
                 numP++;
            else
                 numI++;
        break;
        case 4:
            alert('Elegiste dividir!!\n')
            num1 = pedirNumero();
            num2 = pedirNumero();    
            resultado = dividir(num1,num2);
            mostrarMensaje(resultado);
            if(esPar(resultado))
                numP++;
            else
                numI++;
        break;
        case 5:
            alert('Usted ha salido!!!');    
        break;
        default:
            alert('Error\nPor favor eliga unas de las opciones (1 al 5)')    
        break;
    }
    sumador++;
    total = total + resultado;
}
while(mensaje != 5)

alert('Gracias '+nombreUsuario + ' por usar la calculadora\n1.Resultado total (suma de todos los resultados):'+total+'\n2.Cantidad de intentos: ' 
+sumador+ '\n3.Cantidad de resultados pares: '+numP +'\n4.Cantidad de resultados impares : '+numI);

// Uso una funcion para sumar los 2 valores ingresados
/*
function sumar(num1,num2){
    return num1 + num2;
}

// Uso una funcion para restar los 2 valores ingresados
function restar(num1,num2){
    return num1 - num2;
}

// Uso una funcion para multiplicar los 2 valores ingresados
function multiplicar(num1,num2){
    return num1 * num2;
}

// Uso una funcion para dividir los 2 valores ingresados

function dividir(num1,num2){
    if(num1 != 0){
        return num1 / num2;
    }
    else{
        return 0;
    }
}
*/

// Es una funcion para comprobar si el numero ingresado es par
function esPar(num){
    if(num%2==0)
        return 1;
    else
        return 0;
}


// Uso una funcion para mostrar un mensaje

function mostrarMensaje(mensaje){
    alert('El resultado es: '+mensaje)
}


// Uso una funcion para pedir un valor y pasasrlo a float
function pedirNumero(){
    let num = parseFloat(prompt('Ingrese un numero'));
    return num;
}

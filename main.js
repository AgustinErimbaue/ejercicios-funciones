//Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.

function resta(a, b) {

    let resultado = a - b;
    return resultado;

}



/*Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.*/

function consultarNota() {
    let clasificación = parseInt(prompt('Ingrese la nota'))

    if (clasificación < 4) {
        return ('insuficiente')
    } else if (clasificación >= 5 && clasificación <= 6) {
        return ('suficiente')
    } else if (clasificación >= 7 && clasificación <= 8) {
        return ('notable')
    } else {
        return ('sobresaliente')
    }
}

/*Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.*/

function duplicaNumero(num) {
    if (typeof num === 'number') {
        let resultado = num * 2;
        return (resultado)

    } else {
        return ('Debe ser ejecutada con un numero')
    }
}




/*Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
*/

function caracterInicial(palabra) {

    if (palabra.length === 0) {
        return 'Debo ser ejecutada con un string no vacio'
    } else if (typeof palabra === 'number') {
        return 'Debo ser ejecutada con una string'
    } else if (typeof palabra !== 'number') {
        return palabra[0]
    }
}




/*Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
*/

function ultimoCaracter(palabras) {
    if (palabras.length === 0) {
        return 'Debo ser ejecutada con un string no vacio'
    } else if (typeof palabras === 'number') {
        return 'Debo ser ejecutada con una string'
    } else if (typeof palabras !== 'number') {
        return palabras.slice(-1)
    }
}



/*Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
 */

function cuentaCaracteres(palabra) {
    if (palabra.length === 0) {
        return 'Debo ser ejecutada con un string no vacio'
    } else if (typeof palabra === 'number') {
        return 'Debo ser ejecutada con una string'
    } else if (typeof palabra !== 'number') {
        return palabra.length
    }
}


/*Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
 */

function palindromo(palabra) {
    let separar = palabra.split('')
    let reves = separar.reverse()
    let unir = reves.join('')

    if (palabra === unir) {
        return 'Es palindromo'
    } else {
        return 'No es un formato correcto'

    }

}

/*Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
 */


function getPrecioMostrar(precio) {

    if (typeof precio === "number") {
        let decimal = precio.toFixed(2);
        let string = decimal.toString();
        return (`${string}\u20AC`)
    } else if (typeof precio !== "number") {
        return "no es un formato correcto"
    }
}



/*Crea la función division que acepte como argumento dos números y devuelva el resultado de su división. */

function division(a, b) {
    let resultado = a / b
    return resultado
}

/*Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
 */

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function numerosGrandes(arr) {
    const nuevoArr = []
    for (const numeros of arr) {
        if (numeros > 5) {
            nuevoArr.push(numeros)
        }
    }
    return nuevoArr
}


/*Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo. Debe devolver true si es primo, sino false. 
Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
 */

function numeroPrimo() {
    let numero = parseInt(prompt('ingrese un numero'))

    for (let index = 2; index < numero; index++) {
        if (numero % index === 0) {
            return false;
        }

    }

    return numero !== 1;

}


/*Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.*/

const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function obtenerImpares(arr) {
    const nuevoArr = []
    for (const numeros of arrNumeros) {
        if (numeros % 2 !== 0) {
            nuevoArr.push(numeros)


        }
    }
    return nuevoArr
}

/*Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.
 */

const arrayNumerico = [1, 2, 3]

function sumaArray(arr) {
    let resultado;
    for (const numero of arr) {
        resultado = numero + numero
    }
    return resultado
}

/*Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24.
 */

const numArr = [2, 3, 4]

function multiplicarArray(arr) {
    let resultado = 1;

    for (const numero of arr) {
        resultado = resultado * numero
    }
    return resultado
}

console.log(multiplicarArray(numArr));

/*Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).
 */



function checkPassword() {
    let contador = 3
    let password = 'Agustin'

    let pedirPassword = prompt('ingrese su password')

    while (contador !== 1) {
        if (pedirPassword === password) {
            return (alert('Enhorabuena'))
        } else if (pedirPassword !== password) {
            contador--
            alert(`te quedan ${contador} intentos`)
        }
        pedirPassword = prompt('ingrese su password')

    }
}

console.log((checkPassword()));
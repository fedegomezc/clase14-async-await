/* Realiza un el ejercicio de fizzbuzz con promesas.
Toda validación de cada número debe ser realizado por una función que retorne una promesa.
Validaciones:

- Sí es múltiplo de 3 debe decir fizz
- Sí es múltiplo de 5 debe decir buzz
- Sí es múltiplo de 3 y 5 debe decir fizzbuzz
- Sí no cumple con ninguna de las condiciones anteriores debe mostrar el número  */

async function fizzbuzzFunction(num) {
    //comprobar que 'num' es del tipo number
    if (typeof num !== 'number') {
        console.log('Error: el argumento debe ser un número')
    }
    //función divisible

    //caso num = 0
    //caso num divisible por 3 y 5
    // caso num divisible por 3
    // caso num divisible por 5

    //devolver una promesa
}
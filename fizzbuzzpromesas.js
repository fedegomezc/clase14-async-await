/* Realiza un el ejercicio de fizzbuzz con promesas.
Toda validación de cada número debe ser realizado por una función que retorne una promesa.
Validaciones:

- Sí es múltiplo de 3 debe decir fizz
- Sí es múltiplo de 5 debe decir buzz
- Sí es múltiplo de 3 y 5 debe decir fizzbuzz
- Sí no cumple con ninguna de las condiciones anteriores debe mostrar el número  */

const fizzbuzzFunction = (num) => new Promise((resolve, reject) => {
    if (typeof num === 'number'){
        const result = ((num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz')) || num
        resolve(result);
    } else {
        reject ('Error: el argumento debe ser un número')
    }
})

console.log(fizzbuzzFunction(3));

const result = await fizzbuzzFunction(num);
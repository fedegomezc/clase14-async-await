const ciclos = parseInt(process.argv[2]);
if (!ciclos) {
    console.log("Debes introducir un número")
    process.exit(1)
  }

const fizzbuzzFunction = (num) => new Promise((resolve, reject) => {
    if (typeof num === 'number'){
        const result = ((num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz')) || num
        resolve(result);
    } else {
        reject ('Error: el argumento debe ser un número')
    }
})

function mostrarResultados(ciclos) {
    const to = (ciclos > 0)? ciclos : 100;
    const promesas = [];

    for (let i = 1; i <= to; i++){
        promesas.push(fizzbuzzFunction(i));
    }
    Promise.all(promesas).
        then((results) => results.forEach((result) => console.log(result)));
}

/* const randomNumber = (from=1, to=1000) => Math.floor(Math.random() * (to - from + 1)) + from;
const fizzbuzzFunctionDemora = (num, demora) => new Promise((resolve, reject) => {
    if (typeof num === 'number'){
        setTimeout(() => {
            const result = ((num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz')) || num
            resolve(result);
        }, demora);
    } else {
        reject ('Error: el argumento debe ser un número')
    }
})

async function mostrarResultados(ciclos) {
    const to = (ciclos > 0)? ciclos : 100;
    // const DEMORA_EN_MS = 0;

    try {
        for (let i = 1; i <= to; i++){
            const result = await fizzbuzzFunctionDemora(i, randomNumber());
            console.log(result);
            // setTimeout(() => {
            //     console.log(result);
            // }, DEMORA_EN_MS * i);
        }
    } catch (error) {
        console.log(error);
    }    
} */

mostrarResultados(ciclos);
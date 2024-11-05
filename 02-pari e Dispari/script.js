
//chiedo all'utente se vuole pari o dispari
let sceltaUtente = prompt("scegli tra pari o dispari:").toLowerCase();

//Chiedo all'utente di inserire un numero tra 1 e 5
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));

//genero numero del computer
let numeroComputer = generaNumeroCasuale(1, 5);
console.log("Numero del computer", numeroComputer)

//Somma dei due numeri
let somma = numeroUtente + numeroComputer;

// Verifica se la somma è pari o dispari 
let risultato; 
if (isPari(somma)) 
    { risultato = "pari"; 

    } else { risultato = "dispari"; }

console.log("La somma dei numeri è:", somma); 
console.log("Risultato:", risultato); 

// Dichiarazione del vincitore 
if (risultato === sceltaUtente) { console.log("Hai vinto!"); } else { console.log("Il computer ha vinto!"); }

/**
 * Dato come parametro l'intervallo minimo e massimo
 * genera un numero casuale
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generaNumeroCasuale(min , max){
    return Math.floor(Math.random() * (max-min +1))+min
}



/**
 * Dato un numero verifica se e' pari
 *
 * @param {number} numero
 */
function isPari(numero){
    return numero % 2 === 0;
}
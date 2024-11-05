### Esercizio 01-Palindroma
Chiediamo all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

### Dati
chiedo all'utente di inserire una parola e la salvo

### Esecuzione logica
Definisco la funzione con una stringa in ingresso e ritorna true  o false
con ciclo for confronto  il primo e ultimo elemento della stringa se sono diversi retorno false , 
altrimenti ristorno true

Secondo metodo : confronto la parola con la sua versione invertita
//return word === word.split('').reverse().join('');




### Esercizio 02-Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

### Dati
Informazione dall'utente Pari o Dispari
Numero scelto dall'utente tra 1 e 5
Numero random tra 1 e 5 per il computer

### Esecuzione Logica
Variabile per salvare la scelta dell'utente tra Pari o Dispari
Variabile per salvare numeroUtente scelto tra 1 e 5
creo una funziona che genera numeri casuali generica (nel notro caso min=1 e max=5)
utilizzo la funzione per generare il numero scelto dal computer
faccio la somma del numero scelto dall'utente e quella dal computer
creo una funzione per verificare se la somma e' pari o dispari
richiamo la funzione per verificare se la somma e' pari o dispari
dichirazione del vincitore
const word=prompt("inserisci una parola e ti diro' se e' palindroma")

console.log(IsPalindrome2(word))


/**
 * Data una stringa in ingresso "word" controlla se un parola è palindroma
 * In uscita ritorna true se e' palindroma , altrimenti false.
 *
 * @param {string} word
 */

function IsPalindrome(word){
    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, '');
    let length= word.length;
    for ( let i =0; i<length/2; i++ ){
        if(word[i] !== word[length-1 - i]){
            return false
        }
    }
    return true;
}

function IsPalindrome2(word){
    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, '');
    return word === word.split('').reverse().join('');
}
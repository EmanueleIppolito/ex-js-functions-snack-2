//Snack 1

/*Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/


function somma(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

const somma2 = function(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

const somma3 = (num1, num2) => num1 + num2;

//Snack 1 Fatto

//Snack 2
/*Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero
e restituisce il suo quadrato in una sola riga.*/

const quadrato = num => num * num;

//Snack 2 Fatto


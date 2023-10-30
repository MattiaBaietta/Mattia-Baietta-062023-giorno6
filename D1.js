/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let test;
test = "stringa"; /*La variabile tipo stringa si utilizza per inserire un testo*/
test = 1; /*Variabile di tipo number può solo essere un numero*/
test = true; /*Variabile di tipo boolean può essere o true o false */
test = null; /*Viene attribuito alla variabile un valore "Null" di proposito per rendere per esempio in logica booleana un valore sempre false*/
test = undefined; /*La variabile undefined come dice il nome intende una variabile senza valore assegnato può essere utilizzata ad esempio per restituire un errore di campo "vuoto"*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Mattia";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma;
somma = (12+20);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x;
x = 12;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name="Baietta";

const namec ="mattia";
/* namec="baietta"; Ritornerà un errore perchè la costante "namec" non può essere modificata*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let differenza;
differenza = 4-x;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
name1==name2; /*false*/
name1.toLowerCase() == name2.toLowerCase(); /*true*/
console.log(name1.toLowerCase() == name2.toLowerCase());
/* SCRIVI QUI LA TUA RISPOSTA */



/*extra conversione farheit celsius*/
let gradi = window.prompt("Quanti gradi ci sono?");
window.alert("SONO "+(( gradi - 32) * 5/9)+ " GRADI FAHRENHEIT");
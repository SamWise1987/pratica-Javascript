/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*  I principali datatype di javascript sono:
1) NUmber: Sono i numeri chr utilizziamo nel quotidiano e che hanno anche una forte valenza matematica dentro troviamo numeri come quello di Nepero, numeri negativi e positivi, accordi con insiemistia infinitesimale. Sono quindi: 1,2,3,-345 50/0. Lavorando con gli infinti piò anche effettuare operazioni complesse
2) String: sono parole o frasi che si scrivono sotto apici e doppi apici e componcono il contenuto testuale di un elemento, un div o un oggetto. Se un nuemro viene scritto all'interno degli apici questo viene definito come stringa. Esempi: "ciao", "Hello World"
3) Boolean: servono per la realizzazione logica dell'app ed è spiegabile come fosse un interruttore che si può accendere (true) o spegnere (false)
4)  Undefined: È una variabile che non è stata definita. È come avere una scatola vuota senza nulla dentro
5) Null: In questo caso sappiamo che la scotola è vuota
6) Symbol: È un tipo speciale usato per creare identificatori unici.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*Un oggetto in JavaScript è come una scatola che può contenere molte cose diverse. All'interno di questa scatola, puoi mettere numeri, parole, o persino altre scatole. Ogni cosa dentro l'oggetto ha un nome, così si può trovare facilmente quello che serve.


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Samuele";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let subtraction = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log (name1 === name2);
console.log(name1.toLowerCase()===name2.toLowerCase())
/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/


//salutare e chiedere all'utente quanti km vuole percorrere
var kmUtente =parseInt(prompt("Benvenuto, quanti chilometri devi fare?"));

//chiedere l'età
var etaUtente =parseInt(prompt("Quanti anni hai?"));

//definire costo per km
var kmCosto = 0.21;
// calcolo costo del bilietto prezzo intero
var bigliettoInt =(kmUtente * kmCosto).toFixed(2);

//calcolo della scontistica in caso di minorenni e over 65
if (etaUtente < 18) {
  bigliettoInt = bigliettoInt - (bigliettoInt * 20 / 100).toFixed(2);
  document.getElementById('ticket').innerHTML = "Il tuo biglietto costa " + bigliettoInt + "€";
} else if (etaUtente >= 65) {
  bigliettoInt = bigliettoInt - (bigliettoInt * 40 / 100).toFixed(2);
  document.getElementById('ticket').innerHTML = "Il tuo biglietto costa " + bigliettoInt + "€";
} else {
  document.getElementById('ticket').innerHTML = "Il tuo biglietto costa " + bigliettoInt + "€";
}

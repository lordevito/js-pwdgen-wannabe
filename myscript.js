`use strict`;


let elementNome = document.getElementById(`nome`);
let elementCognome = document.getElementById(`cognome`);
let elementColore = document.getElementById(`colore`);
document.getElementById(`nrandom`).innerHTML = Math.random();

elementNome.innerHTML = prompt(`Inserisci il tuo nome`);
elementCognome.innerHTML = prompt(`Inserisci il tuo cognome`);
elementColore.innerHTML = prompt(`Inserisci il tuo colore preferito`);

console.log(elementNome + elementCognome + elementColore)
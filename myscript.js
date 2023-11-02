`use strict`;


let elementFinale = document.getElementById(`finale`);
let randomN = Math.floor(Math.random() * 100);


let promptNome = prompt (`Inserisci il tuo nome`);
let promptCognome = prompt (`Inserisci il tuo cognome`);
let promptColore = prompt (`Inserisci il tuo colore preferito`);

elementFinale.innerHTML = promptNome + promptCognome + promptColore + randomN;

console.log (promptNome + promptCognome + promptColore + randomN);
"use strict";
// Base para as regras https://www.cuemath.com/numbers/roman-numerals/
// numeral romano
const romanNumbers = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["G", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
// G era pra ser L

// sequências invalidas deve ter mais -> ver dps
const romanInvalid = [
  "VV",
  "GG",
  "DD",
  "IVI",
  "IXI",
  "IGI",
  "ICI",
  "IDI",
  "IMI",
  "XGX",
  "XCX",
  "XDX",
  "XMX",
  "CDC",
  "CMC",
];
// somente I, X, C podem subtrair
// var -> entrada e saida de dados
const inputUser = document.querySelector(".user-input");
const outputUser = document.querySelector(".user-output");
// variavel do botão direto no HTML

// Verifica sequencia invalida
function invalidSequence(userTxt) {
  for (let letters of romanInvalid) {
    if (userTxt.includes(letters)) return true;
  }
  return false;
}

// Algarismos Romanos para Decimais
function romanToDecimal(userTxt) {
  let sum = 0;
  let counter = 1;

  for (let i = 0; i < userTxt.length; i++) {
    // valor atual e proximo
    const currValue = romanNumbers.get(userTxt[i]);
    const nextValue = romanNumbers.get(userTxt[i + 1]);
    if (invalidSequence(userTxt)) {
      sum = "Sequencia de algarismo invalido";
      break;
    }

    // se numeros n estiverem contidos no mapa quebra
    if (!currValue) {
      sum = "Por favor digite letras contidas no algarismo Romano!";
      break;
    }

    //contador de letras  (Importante!!!) N mexer mais mt caoos
    i === 0 || userTxt[i] === userTxt[i + 1] ? counter++ : (counter = 1);
    if (counter > 3) {
      return (sum = "Sequencia de algarismo inval1do");
    }

    // logica de soma e subtração
    if (currValue >= nextValue || !nextValue) {
      sum += currValue;
    } else if (
      currValue < nextValue &&
      ["I", "X", "C"].includes(userTxt[i]) &&
      counter <= 2
    ) {
      sum -= currValue;
    } else {
      return (sum = "Sequencia de algarismo invalido");
    }
  }

  return sum;
}
//evento(e) triggerd por input
inputUser.addEventListener("input", function (e) {
  const userTxt = e.target.value;

  // tratamento do texto
  const decimals = romanToDecimal(userTxt.toString().toUpperCase());
  outputUser.textContent = decimals;
});

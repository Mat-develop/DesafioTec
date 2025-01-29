// Número equivalente aos andar, assim fica mais facil de lembrar
const elevatorShaft = document.querySelector(".elevator-shaft");

// Botões do prédio
const elevatorBtnCall1 = document.querySelector(".elevator-btn1");
const elevatorBtnCall2 = document.querySelector(".elevator-btn2");
const elevatorBtnCall3 = document.querySelector(".elevator-btn3");
const elevatorBtnCall4 = document.querySelector(".elevator-btn4");

// Um único manipulador de eventos então basicamente fazer uma lista
// push() as coisas la dentro conforme o elevador vai chamando é isso

// No painel do elevador e a ordem tem que ser na sequência que o cara botou o dedin
// se n tiver solicitações elevador pro primeiro e fim.

// Botões do painel
const elevatorPanelBtn1 = document.querySelector(".panel-btn1");
const elevatorPanelBtn2 = document.querySelector(".panel-btn2");
const elevatorPanelBtn3 = document.querySelector(".panel-btn3");
const elevatorPanelBtn4 = document.querySelector(".panel-btn4");

// Mapa de todos iterar dps
const elevatorButtons = new Map([
  [elevatorBtnCall1, 1],
  [elevatorBtnCall2, 2],
  [elevatorBtnCall3, 3],
  [elevatorBtnCall4, 4],
  [elevatorPanelBtn1, 1],
  [elevatorPanelBtn2, 2],
  [elevatorPanelBtn3, 3],
  [elevatorPanelBtn4, 4],
]);

// esse aqui pra mudar o andar conforme as chamadas
let currFloor = 1;

// colocar em set pra n duplicar
let elevatorOrder = new Set([]);

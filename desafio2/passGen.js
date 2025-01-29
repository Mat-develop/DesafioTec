// ASCII CODE

// simbolos especiais
const specialChar = ["!", "#", "&", "*", "[", "]", "-", "_", "|", "{", "}"];

// listinha de emojis pra gerar dps
const emojiChar = ["😀", "😁", "🤣", "😃", "😅", "🎅🏼", "🎈", "🥅", "⚽", "🏀"];

// gerador aleatorio com base do char
function charGen(min, max) {
  const charNum = Math.trunc(Math.random() * (max - min) + min - 1);
  const char = String.fromCharCode(charNum);
  return char;
}
const passOutput = document.querySelector(".password-out");
const copyBtn = document.querySelector(".copy-btn");
// função de gerar senha inicia aqui

document.querySelector(".gen-btn").addEventListener("click", function (e) {
  e.preventDefault();
  copyBtn.textContent = "Copiar";
  // manipulação do DOM dos check box e input tamanho senha
  let passSize = document.querySelector(".input-number").value || 10;
  const includeUpper = document.querySelector(".upper-case").checked;
  const includeLower = document.querySelector(".lower-case").checked;
  const includeNumb = document.querySelector(".number-case").checked;
  const includeSpecial = document.querySelector(".special-case").checked;
  const includeEmoji = document.querySelector(".emoji-case").checked;
  let passString = "";

  // listinha pra loopar depois verifica se foi ticado ✅
  const checkList = [
    includeUpper,
    includeLower,
    includeNumb,
    includeSpecial,
    includeEmoji,
  ];

  console.log(checkList.length);
  while (passSize > 0) {
    //Lista de gerador de characteres
    let specialCharGen =
      specialChar[Math.trunc(Math.random() * specialChar.length)];
    let emojiCharGen = emojiChar[Math.trunc(Math.random() * emojiChar.length)];
    let upperCharGen = charGen(65, 90);
    let lowerCharGen = charGen(97, 122);
    let numbCharGen = Math.trunc(Math.random() * 9 + 1);

    let genList = [
      upperCharGen,
      lowerCharGen,
      numbCharGen,
      specialCharGen,
      emojiCharGen,
    ];

    // itera pela genList pra criar a senha -> talvez mudar a forma gen dps
    for (let i = 0; i < checkList.length && passSize > 0; i++) {
      if (checkList[i]) {
        passString += genList[i];
        passSize--;
      }
    }
  }

  passOutput.textContent = passString;
  console.log(passString);

  // Função para copiar a senha
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const copyPassword = passOutput.textContent;

    navigator.clipboard.writeText(copyPassword);
    copyBtn.textContent = "Copiado!";
  });
});

function findFirstUniqueSymbol(inputText) {
  const words = inputText.split(" ");
  const uniqueSymbolsInWords = getAllFirstUniqueSymbolsInWords(words);
  const uniqueSymbolInText = getFirstUniqueSymbolInText(uniqueSymbolsInWords);
  return uniqueSymbolInText;
}

function getAllFirstUniqueSymbolsInWords(words) {
  const nonRepeatedSymbols = [];
  for (const word of words) {
    for (const symbol of word) {
      let arr = word.split("").filter((s) => s === symbol);
      if (arr.length === 1) {
        nonRepeatedSymbols.push(symbol);
        break;
      }
    }
  }
  return nonRepeatedSymbols;
}

function getFirstUniqueSymbolInText(nonRepeatedSymbols) {
  for (const symbol of nonRepeatedSymbols) {
    let arr = nonRepeatedSymbols.filter((s) => s === symbol);
    if (arr.length === 1) {
      return symbol;
    }
  }
  return null;
}

function clear() {
  const textArea = document.getElementById("text");
  textArea.value = "";
}

function showResult(result) {
  const textArea = document.getElementById("text");
  textArea.value = result;
}
// get elements region
const resultButton = document.getElementById("result");
const clearButton = document.getElementById("clear");

// add handlers region

resultButton.addEventListener("click", () => {
  const userText = document.getElementById("text").value;

  const result = findFirstUniqueSymbol(userText);
  showResult(result);
});

clearButton.addEventListener("click", clear);

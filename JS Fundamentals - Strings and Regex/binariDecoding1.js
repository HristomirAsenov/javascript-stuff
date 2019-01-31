function solve() {
  let inputElement = document.getElementById('str');
  let outputElement = document.getElementById('result');

  let onesSum = findOnesSum(inputElement.value);
  let endRange = inputElement.value.length - onesSum;

  let slicedValue = inputElement.value.slice(onesSum, endRange);
  let result = [];

  for(let i = 0; i < slicedValue.length; i+=8){
    let end = i + 8;
    let currentEightElements = slicedValue.slice(i , end);
    let decimalValue = parseInt(currentEightElements, 2);
    let resultChar = String.fromCharCode(decimalValue);
    let pattern = /[A-Za-z\s]/;
    if(pattern.test(resultChar)){
      result.push(resultChar);
    }
  }

  outputElement.textContent = result.join("");
  inputElement.value = "";

  function findOnesSum(inputValue) {
    let result = inputValue;
    while (result.length > 1) {
      let temp = result
        .split("")
        .map(Number)
        .filter((x) => x > 0)
        .reduce((a, b) => a + b)
        .toString();

        result = temp;
    }
    return result;
  }
}
function solve() {
    let inputElement = document.getElementById('str');
    let outputElement = document.getElementById('result');

    let onesSum = findsOnesSum(inputElement.value);
    let end = inputElement.value.length - onesSum;

    let result = inputElement.value.slice(onesSum, end);

    let parts = result
        .split(/([\d]{8})/)
        .filter((x) => x)
        .map((x) => binaryToString(x))
        .filter((c) => /[A-Za-z ]+/g.test(c))
        .join("");
    
    outputElement.textContent = parts;


    function findsOnesSum(value) {

        let result = value;

        while(result.length > 1){
            let temp = result
                .split('')
                .reduce((a,b)=> +a + +b)
                .toString();

            result = temp;
        }
        return +result;
    }

    function binaryToString(element) {
        let decimal = parseInt(element, 2);
        return String.fromCharCode(decimal);
    }
}
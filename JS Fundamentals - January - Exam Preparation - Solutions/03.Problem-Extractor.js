function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('output');
    let button = document.querySelector('#exercise button');

    button.addEventListener('click', doExtraction);

    function doExtraction(){

        let charToTake = (/[0-9]+/.exec(inputElement.value))[0];
        let takenSubstring = inputElement.value.slice(charToTake.length, (+charToTake + charToTake.length));
        let delimeter = takenSubstring.slice(-1);
        let parts = takenSubstring.split(delimeter).filter((x) => x !== '');

        parts[1] = parts[1].replace(new RegExp(`[${parts[0]}]`, 'g'), '');
        parts[1] = parts[1].replace(/[#]/g, " ");

        outputElement.value = parts[1];
    }
}
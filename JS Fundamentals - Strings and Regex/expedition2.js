function solve() {
    let keyword = document.getElementById('str').value;
    let text = document.getElementById('text').value;

    let outputElement = document.getElementById('result');

    let regEx = new RegExp(`${keyword}(.*?)${keyword}`, "g");
    let message = `Message: ${regEx.exec(text)[1]}`;
    text = text.replace(message, "");

    let regex = /(east|north)[\s\S]*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gi;

    let m;

    let east = "";
    let north = "";

    while ((m = regex.exec(text)) !== null) {
        if(m[1].toUpperCase() === 'NORTH'){
            north = `${m[2]}.${m[3]} N`;
        } else if(m[1].toUpperCase() === "EAST"){
            east = `${m[2]}.${[m[3]]} E`;
        }
    }

    appendToParent(north);
    appendToParent(east);
    appendToParent(message);

    function appendToParent(text) {
        let p = document.createElement('p');
        p.textContent = text;
        outputElement.appendChild(p);
    }
}
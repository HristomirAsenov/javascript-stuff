function solve() {
    let buttons = document.getElementsByTagName('button');
    let textAreas = document.getElementsByTagName('textarea');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {

        let encodeMessage = textAreas[0].value;

        let newMessage = '';

        encodeMessage.split('').forEach((char) => {
            let asciiValue = char.charCodeAt(0) + 1;
            newMessage += String.fromCharCode(asciiValue);
        });

        textAreas[0].value = "";
        textAreas[1].value = newMessage;
    }
    
    
    function decode() {

        let decodeMessage = textAreas[1].value;
        let originalMessage = "";

        decodeMessage.split('').forEach((char) => {
            let asciiValue = char.charCodeAt(0) - 1;
            originalMessage += String.fromCharCode(asciiValue);
        });
        
        textAreas[1].value = originalMessage;
    }
}
function solve() {

    let string = document.getElementById('str');
    let outputElement = document.getElementById('result');

    let [text, wantedInfo] = string.value.split(', ');
    let message;

    let namePattern = / ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightNumberPattern = / [A-Z]{1,3}[\d]{1,5} /g;


    if(wantedInfo === 'name'){
        let matchInfo = text.match(namePattern)[0];
        let name = matchInfo.trim().replace('-', ' ');
        outputElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
    } else if(wantedInfo === "flight"){
        let airport = text.match(airportPattern)[0].split('/').map((e) => e.trim());
        let flightNumber = text.match(flightNumberPattern)[0].trim();

        outputElement.textContent = `Your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}.`;
		
		
		//TODO...? :)
    }
}
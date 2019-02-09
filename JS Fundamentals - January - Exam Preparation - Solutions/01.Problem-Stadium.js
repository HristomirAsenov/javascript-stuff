function solve() {
    let ticketPrices = {
        'TEAM': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        'summary': {
            'fans': 0,
            'profit': 0
        }
    };

    let buttons = document.getElementsByClassName('seat');
    let textArea = document.getElementById('output');
    let summary = document.getElementById('summary');

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', buttonClick);
    });

    function buttonClick(e){
        let button = e.target;
        let seatNumber = +button.textContent;
        let zone = button.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(+(e.target.parentNode.cellIndex) + 65);

        if(button.style.backgroundColor === ''){
            ticketPrices.summary.fans +=1;
            
            let key = zone !== "VIP" ? 'TEAM' : 'VIP';
           
            ticketPrices.summary.profit += ticketPrices[key][sector];
            e.target.style.backgroundColor = "rgb(255,0,0)";

            textArea.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.\n`;
        } else {
            textArea.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.\n`;
        }
    }
    
    summary.children[0].addEventListener('click', printTheSummary);

    function printTheSummary(){
        summary.children[1].textContent = `${ticketPrices.summary.profit} leva, ${ticketPrices.summary.fans} fans.`;
    }
}
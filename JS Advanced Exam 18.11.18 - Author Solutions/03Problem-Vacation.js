class Vacation {

    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {

        let output;

        if (budget >= this.budget) {

            if (!this.kids[grade]) {
                this.kids[grade] = [];
            }

            let isThisKidExist = this.kids[grade].filter(kN => kN.split('-')[0] === name);

            if (isThisKidExist.length === 0) {
                let kidNameMoney = `${name}-${budget}`;
                this.kids[grade].push(kidNameMoney);
                output = this.kids[grade];
            } else {
                output = `${name} is already in the list for this ${this.destination} vacation.`
            }
        } else {
            output = `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        return output;
    }

    removeChild(name, grade) {

        let output;
        let isThisKidExist = this.kids[grade] ? this.kids[grade].filter(kN => kN.split('-')[0] === name) : 0;

        if (isThisKidExist.length === 1) {

            let kidIndex = this.kids[grade].indexOf(isThisKidExist[0]);

            this.kids[grade].splice(kidIndex, 1);
            output = this.kids[grade];

        } else {
            output = `We couldn't find ${name} in ${grade} grade.`;
        }

        return output;
    }

    get numberOfChildren() {
        let valuesExist = Object.values(this.kids).filter((arr) => arr.length >= 1);
        let output = 0;
        if (valuesExist.length >= 1) {

            valuesExist.forEach(g => output+= g.length);
        }
        return output;
    }

    toString() {
        let output = '';

        if (this.numberOfChildren >= 1) {
            output += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

            Object.keys(this.kids).sort((prevG, currG) => prevG - currG).forEach((prevG, currG) => {
                if(this.kids[prevG].length > 0){
                    output += `Grade: ${prevG}\n`;
                    let count = 1;
                    Object.keys(this.kids[prevG]).sort((prevN, currN) => prevN - currN).forEach((prevN, currN) => {
                        output += `${count++}. ${this.kids[prevG][prevN]}\n`
                    });
                    count = 1;
                }
            })

        } else {
            output += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        return output;
    }
}
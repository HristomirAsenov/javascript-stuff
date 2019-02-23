function solve(input) {

    let townsInfo = input.reduce((acc, cur) => {

        if (!acc[cur.town]) {
            acc[cur.town] = [];
        }

        acc[cur.town].push({ 'regNumber': cur.regNumber, 'price': cur.price, 'model': cur.model });
        return acc;
    }, {});

    let mostProfitableTown = Object.keys(townsInfo)
        .sort((townA, townB) => totalTownProfit(townB, false) - totalTownProfit(townA, false) || townA.localeCompare(townB))[0];

    let townModelsInfo = townsInfo[mostProfitableTown].reduce((acc, cur) => {

        if (!acc[cur.model]) {
            acc[cur.model] = {
                count: 1,
                price: cur.price
            };
        } else {

            if (cur.price > acc[cur.model].price) {
                acc[cur.model].price = cur.price;
            }
            acc[cur.model].count += 1;
        }

        return acc;
    }, {});

    let mostPopularCar = Object.keys(townModelsInfo)
        .sort((a, b) => (townModelsInfo[b].count - townModelsInfo[a].count) || townModelsInfo[b].price - townModelsInfo[a].price || a.localeCompare(b))[0];

    console.log(`${mostProfitableTown} is most profitable - ${totalTownProfit(townsInfo[mostProfitableTown], true)} BGN`);
    console.log(`Most driven model: ${mostPopularCar}`);

    Object.keys(townsInfo).sort((a, b) => a.localeCompare(b)).forEach((x) => {
        let cars = townsInfo[x]
            .filter((m) => m.model === mostPopularCar).sort((a, b) => a.regNumber.localeCompare(b.regNumber))
            .map((m) => m.regNumber);
        if (cars.length > 0) {
            console.log(`${x}: ${cars.join(', ')}`);
        }
    });

    function totalTownProfit(town, parent) {

        let totalProfit = 0;

        if (!parent) {
            totalProfit += townsInfo[town].map((x) => +x.price).reduce((a, b) => a + b);
        } else {
            totalProfit += town.map((x) => +x.price).reduce((a, b) => a + b);
        }

        return totalProfit;
    }
}
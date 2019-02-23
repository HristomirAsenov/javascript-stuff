function solve(table, command) {

    let tokens = command.split(' ');

    let modifiedTable = [];
    switch (tokens[0]) {
        case 'hide':
            modifiedTable = hideFunction(tokens[1]);
            break;
        case 'filter':
            modifiedTable = filterFunction(tokens[1], tokens[2]);
            break;
        case 'sort':
            modifiedTable = sortFunction(tokens[1]);
            break;
    }

    printTheTable(modifiedTable);

    function sortFunction(header) {
        let index = table[0].indexOf(header);
        let result = [];
        result.push(table.shift());
        result.push(...table.sort((a, b) => a[index].localeCompare(b[index])));

        return result;
    }

    function hideFunction(header) {
        let index = table[0].indexOf(header);
        let result = [];
        table.forEach((row) => {
            result.push(row.filter((v, i) => i !== index));
        });
        return result;
    }

    function filterFunction(header, value) {
        let index = table[0].indexOf(header);
        let result = [];
        table.forEach((row, i) => {
            if (row[index] === value || i === 0) {
                result.push(row);
            }
        })
        return result;
    }

    function printTheTable(modTable) {

        modTable.forEach((row) => {
            console.log(row.join(" | "));
        })
    }
}
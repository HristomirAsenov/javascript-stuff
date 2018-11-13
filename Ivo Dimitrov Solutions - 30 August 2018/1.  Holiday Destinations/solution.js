function addDestination() {
    let town = $('.inputData')[0].value;
    let country = $('.inputData')[1].value;
    let season = $('#seasons option:selected').text();

    if (town !== '' && country !== '') {
        let row = $('<tr>')
            .append($('<td>').text(`${town}, ${country}`))
            .append($('<td>').text(season));
        $('#destinationsList').append(row);

        $('.inputData')[0].value = '';
        $('.inputData')[1].value = '';

        let summer = $('#summer').val();
        let autumn = $('#autumn').val();
        let winter = $('#winter').val();
        let spring = $('#spring').val();

        if (season === "Summer") {
            summer = Number(summer) + 1;
            $('#summer').val(summer);
        } else if (season === "Autumn") {
            autumn = Number(autumn) + 1;
            $('#autumn').val(autumn);
        } else if (season === "Winter") {
            winter = Number(winter) + 1;
            $('#winter').val(winter);
        } else if (season === "Spring") {
            spring = Number(spring) + 1;
            $('#spring').val(spring);
        }
    }

}
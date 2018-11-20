function realEstateAgency () {

    let regOfferBtn = $('button[name="regOffer"]');
    let findOfferBtn = $('button[name="findOffer"]');

    regOfferBtn.on('click', regOffer);
    findOfferBtn.on('click', findOffer);

    function regOffer() {

        let rent = $('div#regOffer input[name="apartmentRent"]');
        let type = $('div#regOffer input[name="apartmentType"]');
        let commission = $('div#regOffer input[name="agencyCommission"]');
        let message = $('#offerManager').find('div#notifications p#message');

        if (Number(rent.val()) > 0 && type.val() && Number(commission.val()) >= 0 && Number(commission.val()) <= 100) {

            let div = $("<div>");

            div.addClass('apartment');

            let pRent = $(`<p>`);
            pRent.text(`Rent: ${Number(rent.val())}`);

            let pType = $(`<p>`);
            pType.text(`Type: ${type.val()}`);

            let pCommission = $(`<p>`);
            pCommission.text(`Commission: ${Number(commission.val())}`);

            div.append(pRent);
            div.append(pType);
            div.append(pCommission);

            $("#building").append(div);

            message.text('Your offer was created successfully.')


        } else {
            message.text('Your offer registration went wrong, try again.')
        }

        rent.val("");
        type.val("");
        commission.val("");
    }
    function findOffer() {

        let budget = $('div#findOffer input[name="familyBudget"]');
        let familyApartmentType = $('div#findOffer input[name="familyApartmentType"]');
        let name = $('div#findOffer input[name="familyName"]');
        let agencyProfit = $('#roof').find('h1');

        let allOffers = $('div#building');
        let offers = Number(allOffers.children().length);

        let message = $('#offerManager').find('div#notifications p#message');

        let amIHomeless = true;

        for (let i = 0; i < offers; i++) {

            let div = allOffers.children().eq(i);

            let rent = +div.children().first().text().split(/: /)[1];
            let type = div.children().eq(1).text().split(/: /)[1];
            let commission = +div.children().eq(2).text().split(/: /)[1];

            let allMoney = (rent + (rent * (commission / 100)));

            let currentAgencyProfit = (rent * (commission / 100)) * 2;
            let entireAgencyProfit = +agencyProfit.text().split(' ')[2] + currentAgencyProfit;

            if (budget.val() >= allMoney && type === familyApartmentType.val()) {

                div.css("border", "2px solid red");

                div.children().first().text(`${name.val()}`);
                div.children().eq(1).text('live here now');
                div.children().eq(2).remove();

                let moveOutBtn = $('<button>');
                moveOutBtn.on('click', function () {
                    div.remove();
					let familyName = div.children().first().text();
					message.text(`They had found cockroaches in ${familyName}\'s apartment`);
                });
                moveOutBtn.text('MoveOut');

                div.append(moveOutBtn);

                amIHomeless = false;

                agencyProfit.text(`Agency profit: ${entireAgencyProfit} lv.`);
                break;
            }
        }

        if (amIHomeless) {
            message.text('We were unable to find you a home, so sorry :(');
        } else {
            message.text('Enjoy your new home! :))');
        }

        budget.val('');
        familyApartmentType.val('');
        name.val('');
    }
}
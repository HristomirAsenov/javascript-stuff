function acceptance() {

    let warehouse = $('div#warehouse');

    let company = $('tbody tr td input[name="shippingCompany"]');
    let product = $('tbody tr td input[name="productName"]');
    let quantity = $('tbody tr td input[name="productQuantity"]');
    let scrape = $('tbody tr td input[name="productScrape"]');
	

    if(company.val() && product.val() && +quantity.val() && +scrape.val()){

        let availableQuantity = +quantity.val() - +scrape.val();

      	if(availableQuantity === 0){
        	return;
        }
      
        let div = $('<div>');
        let p = $('<p>');
        let btn = $('<button type="button">Out of stock</button>').on('click', () => div.remove());

        p.text(`[${company.val()}] ${product.val()} - ${availableQuantity} pieces`);

        div.append(p);
        div.append(btn);

        warehouse.append(div);
    }

    company.val('');
    product.val('');
    quantity.val('');
    scrape.val('');
}
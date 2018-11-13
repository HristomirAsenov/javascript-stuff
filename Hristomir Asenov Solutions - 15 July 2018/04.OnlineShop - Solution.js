function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
	
	// My solution starts from here //
	
    let productNameElement = $('.custom-select');
    let productPriceElement = $('#price');
    let productQuantityElement = $('#quantity');

    let button = $('#submit');

    let ul = $('ul.display');

    let capacity = $('#capacity');
    let sum = $('#sum');

    let totalCapacity = 0;
    let totalSum = 0;

    productNameElement.on('input', () => button.attr('disabled', false));
    //productNameElement.on('keyup', () => button.attr('disabled', false));
    button.on('click', addProduct);

    function addProduct() {
        if(productNameElement.val()){

            totalCapacity += +productQuantityElement.val();
            totalSum += +productPriceElement.val();

            let li = $('<li>');
            li.text(`Product: ${productNameElement.val()} Price: ${productPriceElement.val()} Quantity: ${productQuantityElement.val()}`);
            ul.append(li);

            if(totalCapacity <= 149){
                capacity.val(totalCapacity);
                resetAll();
            } else {

                capacity.val('full');
                capacity.addClass('fullCapacity');

                resetAll();
                disableAll();
            }

            sum.val(totalSum);
        }
    }
    
    
    function resetAll() {
        productNameElement.val('');
        productPriceElement.val(1);
        productQuantityElement.val(1);
        button.attr('disabled', true);

    }
    
    function disableAll() {
        productNameElement.attr('disabled', true);
        productPriceElement.attr('disabled', true);
        productQuantityElement.attr('disabled', true);
        button.attr('disabled', true);
    }
}

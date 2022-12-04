
function initPayPalButton() { 
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'horizontal',
            label: 'paypal',

        },

        createOrder: function (data, actions) {
            var price = document.getElementById("price").value;
            
            return actions.order.create({
                purchase_units: [{ "amount": { "currency_code": "USD", "value": price} }]
            });
        },

        onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment, please click step 5 to get your ticket!</h3>';

                var getTK = document.getElementById("btn-step-5").disabled = false;

                // Or go to another URL:  actions.redirect('thank_you.html');

            });
        },

        onError: function (err) {
            console.log(err);
        }
    }).render('#paypal-button-container');
}
initPayPalButton();
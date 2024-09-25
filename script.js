let totalPrice = 0;
let orderList = [];

function addToOrder(item, price) {
    // Add the item and price to the order list
    orderList.push({ item, price });
    
    // Update the display of the order list
    let orderListDiv = document.getElementById("order-list");
    let newItem = document.createElement("p");
    newItem.innerText = `${item}: KSh ${price}`;
    orderListDiv.appendChild(newItem);

    // Update the total price
    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice;
}

function payWithMpesa() {
    if (totalPrice > 0) {
        alert(`You have chosen to pay KSh ${totalPrice} using M-Pesa.`);
        // Implement your M-Pesa payment integration here.
    } else {
        alert("Please add items to your order before making payment.");
    }
}

function payWithPaypal() {
    if (totalPrice > 0) {
        alert(`You have chosen to pay KSh ${totalPrice} using PayPal.`);
        // Implement your PayPal payment integration here.
    } else {
        alert("Please add items to your order before making payment.");
    }
}

function payWithStripe() {
    if (totalPrice > 0) {
        alert(`You have chosen to pay KSh ${totalPrice} using Stripe.`);
        // Implement your Stripe payment integration here.
    } else {
        alert("Please add items to your order before making payment.");
    }
}

// Theme toggler function
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});
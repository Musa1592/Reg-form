// Cart functionality
let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} has been added to your cart!`);
    console.log(cart); // Logs the cart in the browser's console
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Resets the form
    } else {
        alert('Please fill in all fields.');
    }
});
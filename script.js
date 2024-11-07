// Function to add items to cart
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} added to cart!`);
}

// Display cart content in the console for testing (you can enhance this to show on the page)
console.log('Cart Contents:', JSON.parse(localStorage.getItem('cart')));
